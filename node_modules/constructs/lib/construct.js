"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructOrder = exports.Construct = exports.Node = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const dependency_1 = require("./dependency");
const stack_trace_1 = require("./private/stack-trace");
const uniqueid_1 = require("./private/uniqueid");
const CONSTRUCT_SYM = Symbol.for('constructs.Construct');
/**
 * Represents the construct node in the scope tree.
 */
class Node {
    /**
     * Returns the node associated with a construct.
     * @param construct the construct
     *
     * @deprecated use `construct.node` instead
     */
    static of(construct) {
        return construct.node;
    }
    constructor(host, scope, id) {
        this.host = host;
        this._locked = false; // if this is "true", addChild will fail
        this._children = {};
        this._context = {};
        this._metadata = new Array();
        this._dependencies = new Set();
        this._validations = new Array();
        id = id ?? ''; // if undefined, convert to empty string
        this.id = sanitizeId(id);
        this.scope = scope;
        if (scope && !this.id) {
            throw new Error('Only root constructs may have an empty ID');
        }
        // add to parent scope
        scope?.node.addChild(host, this.id);
    }
    /**
     * The full, absolute path of this construct in the tree.
     *
     * Components are separated by '/'.
     */
    get path() {
        const components = [];
        for (const scope of this.scopes) {
            if (scope.node.id) {
                components.push(scope.node.id);
            }
        }
        return components.join(Node.PATH_SEP);
    }
    /**
     * Returns an opaque tree-unique address for this construct.
     *
     * Addresses are 42 characters hexadecimal strings. They begin with "c8"
     * followed by 40 lowercase hexadecimal characters (0-9a-f).
     *
     * Addresses are calculated using a SHA-1 of the components of the construct
     * path.
     *
     * To enable refactorings of construct trees, constructs with the ID `Default`
     * will be excluded from the calculation. In those cases constructs in the
     * same tree may have the same addreess.
     *
     * @example c83a2846e506bcc5f10682b564084bca2d275709ee
     */
    get addr() {
        if (!this._addr) {
            this._addr = (0, uniqueid_1.addressOf)(this.scopes.map(c => c.node.id));
        }
        return this._addr;
    }
    /**
     * Return a direct child by id, or undefined
     *
     * @param id Identifier of direct child
     * @returns the child if found, or undefined
     */
    tryFindChild(id) {
        return this._children[sanitizeId(id)];
    }
    /**
     * Return a direct child by id
     *
     * Throws an error if the child is not found.
     *
     * @param id Identifier of direct child
     * @returns Child with the given id.
     */
    findChild(id) {
        const ret = this.tryFindChild(id);
        if (!ret) {
            throw new Error(`No child with id: '${id}'`);
        }
        return ret;
    }
    /**
     * Returns the child construct that has the id `Default` or `Resource"`.
     * This is usually the construct that provides the bulk of the underlying functionality.
     * Useful for modifications of the underlying construct that are not available at the higher levels.
     *
     * @throws if there is more than one child
     * @returns a construct or undefined if there is no default child
     */
    get defaultChild() {
        if (this._defaultChild !== undefined) {
            return this._defaultChild;
        }
        const resourceChild = this.tryFindChild('Resource');
        const defaultChild = this.tryFindChild('Default');
        if (resourceChild && defaultChild) {
            throw new Error(`Cannot determine default child for ${this.path}. There is both a child with id "Resource" and id "Default"`);
        }
        return defaultChild || resourceChild;
    }
    /**
     * Override the defaultChild property.
     *
     * This should only be used in the cases where the correct
     * default child is not named 'Resource' or 'Default' as it
     * should be.
     *
     * If you set this to undefined, the default behavior of finding
     * the child named 'Resource' or 'Default' will be used.
     */
    set defaultChild(value) {
        this._defaultChild = value;
    }
    /**
     * All direct children of this construct.
     */
    get children() {
        return Object.values(this._children);
    }
    /**
     * Return this construct and all of its children in the given order
     */
    findAll(order = ConstructOrder.PREORDER) {
        const ret = new Array();
        visit(this.host);
        return ret;
        function visit(c) {
            if (order === ConstructOrder.PREORDER) {
                ret.push(c);
            }
            for (const child of c.node.children) {
                visit(child);
            }
            if (order === ConstructOrder.POSTORDER) {
                ret.push(c);
            }
        }
    }
    /**
     * This can be used to set contextual values.
     * Context must be set before any children are added, since children may consult context info during construction.
     * If the key already exists, it will be overridden.
     * @param key The context key
     * @param value The context value
     */
    setContext(key, value) {
        if (this.children.length > 0) {
            const names = this.children.map(c => c.node.id);
            throw new Error('Cannot set context after children have been added: ' + names.join(','));
        }
        this._context[key] = value;
    }
    /**
     * Retrieves a value from tree context if present. Otherwise, would throw an error.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or throws error if there is no context value for this key
     */
    getContext(key) {
        const value = this._context[key];
        if (value !== undefined) {
            return value;
        }
        if (value === undefined && !this.scope?.node) {
            throw new Error(`No context value present for ${key} key`);
        }
        return this.scope && this.scope.node.getContext(key);
    }
    /**
     * Retrieves the all context of a node from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param defaults Any keys to override the retrieved context
     * @returns The context object or an empty object if there is discovered context
     */
    getAllContext(defaults) {
        if (typeof defaults === 'undefined') {
            defaults = {};
        }
        if (this.scope === undefined) {
            return defaults;
        }
        const value = { ...this._context, ...defaults };
        return this.scope && this.scope.node.getAllContext(value);
    }
    /**
     * Retrieves a value from tree context.
     *
     * Context is usually initialized at the root, but can be overridden at any point in the tree.
     *
     * @param key The context key
     * @returns The context value or `undefined` if there is no context value for this key.
     */
    tryGetContext(key) {
        const value = this._context[key];
        if (value !== undefined) {
            return value;
        }
        return this.scope && this.scope.node.tryGetContext(key);
    }
    /**
     * An immutable array of metadata objects associated with this construct.
     * This can be used, for example, to implement support for deprecation notices, source mapping, etc.
     */
    get metadata() {
        return [...this._metadata];
    }
    /**
     * Adds a metadata entry to this construct.
     * Entries are arbitrary values and will also include a stack trace to allow tracing back to
     * the code location for when the entry was added. It can be used, for example, to include source
     * mapping in CloudFormation templates to improve diagnostics.
     *
     * @param type a string denoting the type of metadata
     * @param data the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
     * @param options options
     */
    addMetadata(type, data, options = {}) {
        if (data == null) {
            return;
        }
        const shouldTrace = options.stackTrace ?? false;
        const trace = shouldTrace ? (0, stack_trace_1.captureStackTrace)(options.traceFromFunction ?? this.addMetadata) : undefined;
        this._metadata.push({ type, data, trace });
    }
    /**
     * All parent scopes of this construct.
     *
     * @returns a list of parent scopes. The last element in the list will always
     * be the current construct and the first element will be the root of the
     * tree.
     */
    get scopes() {
        const ret = new Array();
        let curr = this.host;
        while (curr) {
            ret.unshift(curr);
            curr = curr.node.scope;
        }
        return ret;
    }
    /**
     * Returns the root of the construct tree.
     * @returns The root of the construct tree.
     */
    get root() {
        return this.scopes[0];
    }
    /**
     * Returns true if this construct or the scopes in which it is defined are
     * locked.
     */
    get locked() {
        if (this._locked) {
            return true;
        }
        if (this.scope && this.scope.node.locked) {
            return true;
        }
        return false;
    }
    /**
     * Add an ordering dependency on another construct.
     *
     * An `IDependable`
     */
    addDependency(...deps) {
        for (const d of deps) {
            this._dependencies.add(d);
        }
    }
    /**
     * Return all dependencies registered on this node (non-recursive).
     */
    get dependencies() {
        const result = new Array();
        for (const dep of this._dependencies) {
            for (const root of dependency_1.Dependable.of(dep).dependencyRoots) {
                result.push(root);
            }
        }
        return result;
    }
    /**
     * Remove the child with the given name, if present.
     *
     * @returns Whether a child with the given name was deleted.
     * @experimental
     */
    tryRemoveChild(childName) {
        if (!(childName in this._children)) {
            return false;
        }
        delete this._children[childName];
        return true;
    }
    /**
     * Adds a validation to this construct.
     *
     * When `node.validate()` is called, the `validate()` method will be called on
     * all validations and all errors will be returned.
     *
     * @param validation The validation object
     */
    addValidation(validation) {
        this._validations.push(validation);
    }
    /**
     * Validates this construct.
     *
     * Invokes the `validate()` method on all validations added through
     * `addValidation()`.
     *
     * @returns an array of validation error messages associated with this
     * construct.
     */
    validate() {
        const deprecated = ['validate', 'onValidate', 'synthesize', 'onSynthesize', 'prepare', 'onPrepare'];
        for (const method of deprecated) {
            if (typeof (this.host[method]) === 'function') {
                throw new Error(`the construct "${this.path}" has a "${method}()" method which is no longer supported. Use "construct.node.addValidation()" to add validations to a construct`);
            }
        }
        const errors = new Array();
        for (const v of this._validations) {
            errors.push(...v.validate());
        }
        return errors;
    }
    /**
     * Locks this construct from allowing more children to be added. After this
     * call, no more children can be added to this construct or to any children.
     */
    lock() {
        this._locked = true;
    }
    /**
     * Adds a child construct to this node.
     *
     * @param child The child construct
     * @param childName The type name of the child construct.
     * @returns The resolved path part name of the child
     */
    addChild(child, childName) {
        if (this.locked) {
            // special error if root is locked
            if (!this.path) {
                throw new Error('Cannot add children during synthesis');
            }
            throw new Error(`Cannot add children to "${this.path}" during synthesis`);
        }
        if (this._children[childName]) {
            const name = this.id ?? '';
            const typeName = this.host.constructor.name;
            throw new Error(`There is already a Construct with name '${childName}' in ${typeName}${name.length > 0 ? ' [' + name + ']' : ''}`);
        }
        this._children[childName] = child;
    }
}
_a = JSII_RTTI_SYMBOL_1;
Node[_a] = { fqn: "constructs.Node", version: "10.3.0" };
/**
 * Separator used to delimit construct path components.
 */
Node.PATH_SEP = '/';
exports.Node = Node;
/**
 * Represents the building block of the construct graph.
 *
 * All constructs besides the root construct must be created within the scope of
 * another construct.
 */
class Construct {
    /**
     * Checks if `x` is a construct.
     *
     * Use this method instead of `instanceof` to properly detect `Construct`
     * instances, even when the construct library is symlinked.
     *
     * Explanation: in JavaScript, multiple copies of the `constructs` library on
     * disk are seen as independent, completely different libraries. As a
     * consequence, the class `Construct` in each copy of the `constructs` library
     * is seen as a different class, and an instance of one class will not test as
     * `instanceof` the other class. `npm install` will not create installations
     * like this, but users may manually symlink construct libraries together or
     * use a monorepo tool: in those cases, multiple copies of the `constructs`
     * library can be accidentally installed, and `instanceof` will behave
     * unpredictably. It is safest to avoid using `instanceof`, and using
     * this type-testing method instead.
     *
     * @returns true if `x` is an object created from a class which extends `Construct`.
     * @param x Any object
     */
    static isConstruct(x) {
        return x && typeof x === 'object' && x[CONSTRUCT_SYM];
    }
    /**
     * Creates a new construct node.
     *
     * @param scope The scope in which to define this construct
     * @param id The scoped construct ID. Must be unique amongst siblings. If
     * the ID includes a path separator (`/`), then it will be replaced by double
     * dash `--`.
     */
    constructor(scope, id) {
        this.node = new Node(this, scope, id);
        // implement IDependable privately
        dependency_1.Dependable.implement(this, {
            dependencyRoots: [this],
        });
    }
    /**
     * Returns a string representation of this construct.
     */
    toString() {
        return this.node.path || '<root>';
    }
}
_b = JSII_RTTI_SYMBOL_1;
Construct[_b] = { fqn: "constructs.Construct", version: "10.3.0" };
exports.Construct = Construct;
/**
 * In what order to return constructs
 */
var ConstructOrder;
(function (ConstructOrder) {
    /**
     * Depth-first, pre-order
     */
    ConstructOrder[ConstructOrder["PREORDER"] = 0] = "PREORDER";
    /**
     * Depth-first, post-order (leaf nodes first)
     */
    ConstructOrder[ConstructOrder["POSTORDER"] = 1] = "POSTORDER";
})(ConstructOrder = exports.ConstructOrder || (exports.ConstructOrder = {}));
const PATH_SEP_REGEX = new RegExp(`${Node.PATH_SEP}`, 'g');
/**
 * Return a sanitized version of an arbitrary string, so it can be used as an ID
 */
function sanitizeId(id) {
    // Escape path seps as double dashes
    return id.replace(PATH_SEP_REGEX, '--');
}
// Mark all instances of 'Construct'
Object.defineProperty(Construct.prototype, CONSTRUCT_SYM, {
    value: true,
    enumerable: false,
    writable: false,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0cnVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZDQUF1RDtBQUV2RCx1REFBMEQ7QUFDMUQsaURBQStDO0FBRS9DLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQVl6RDs7R0FFRztBQUNILE1BQWEsSUFBSTtJQU1mOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFxQjtRQUNwQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQXlCRCxZQUFvQyxJQUFlLEVBQUUsS0FBaUIsRUFBRSxFQUFVO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQVc7UUFUM0MsWUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLHdDQUF3QztRQUNoRCxjQUFTLEdBQWlDLEVBQUcsQ0FBQztRQUM5QyxhQUFRLEdBQTJCLEVBQUcsQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO1FBRXZDLGlCQUFZLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUl2RCxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLHdDQUF3QztRQUV2RCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsc0JBQXNCO1FBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENB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Ozs7Ozs7O09BT0c7SUFDSCxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEMsa0NBQWtDO1FBQ2xDLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN6QixlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQ3BDLENBQUM7Ozs7QUFwRFUsOEJBQVM7QUFzRXRCOztHQUVHO0FBQ0gsSUFBWSxjQVVYO0FBVkQsV0FBWSxjQUFjO0lBQ3hCOztPQUVHO0lBQ0gsMkRBQVEsQ0FBQTtJQUVSOztPQUVHO0lBQ0gsNkRBQVMsQ0FBQTtBQUNYLENBQUMsRUFWVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQVV6QjtBQUVELE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRTNEOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsRUFBVTtJQUM1QixvQ0FBb0M7SUFDcEMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBc0JELG9DQUFvQztBQUNwQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFO0lBQ3hELEtBQUssRUFBRSxJQUFJO0lBQ1gsVUFBVSxFQUFFLEtBQUs7SUFDakIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVwZW5kYWJsZSwgSURlcGVuZGFibGUgfSBmcm9tICcuL2RlcGVuZGVuY3knO1xuaW1wb3J0IHsgTWV0YWRhdGFFbnRyeSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgY2FwdHVyZVN0YWNrVHJhY2UgfSBmcm9tICcuL3ByaXZhdGUvc3RhY2stdHJhY2UnO1xuaW1wb3J0IHsgYWRkcmVzc09mIH0gZnJvbSAnLi9wcml2YXRlL3VuaXF1ZWlkJztcblxuY29uc3QgQ09OU1RSVUNUX1NZTSA9IFN5bWJvbC5mb3IoJ2NvbnN0cnVjdHMuQ29uc3RydWN0Jyk7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNvbnN0cnVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29uc3RydWN0IGV4dGVuZHMgSURlcGVuZGFibGUge1xuICAvKipcbiAgICogVGhlIHRyZWUgbm9kZS5cbiAgICovXG4gIHJlYWRvbmx5IG5vZGU6IE5vZGU7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY29uc3RydWN0IG5vZGUgaW4gdGhlIHNjb3BlIHRyZWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgLyoqXG4gICAqIFNlcGFyYXRvciB1c2VkIHRvIGRlbGltaXQgY29uc3RydWN0IHBhdGggY29tcG9uZW50cy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUEFUSF9TRVAgPSAnLyc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgYXNzb2NpYXRlZCB3aXRoIGEgY29uc3RydWN0LlxuICAgKiBAcGFyYW0gY29uc3RydWN0IHRoZSBjb25zdHJ1Y3RcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBjb25zdHJ1Y3Qubm9kZWAgaW5zdGVhZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvZihjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBOb2RlIHtcbiAgICByZXR1cm4gY29uc3RydWN0Lm5vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2NvcGUgaW4gd2hpY2ggdGhpcyBjb25zdHJ1Y3QgaXMgZGVmaW5lZC5cbiAgICpcbiAgICogVGhlIHZhbHVlIGlzIGB1bmRlZmluZWRgIGF0IHRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3Qgc2NvcGUgdHJlZS5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzY29wZT86IElDb25zdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGlzIGNvbnN0cnVjdCB3aXRoaW4gdGhlIGN1cnJlbnQgc2NvcGUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzY29wZS11bmlxdWUgaWQuIFRvIG9idGFpbiBhbiBhcHAtdW5pcXVlIGlkIGZvciB0aGlzIGNvbnN0cnVjdCwgdXNlIGBhZGRyYC5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2xvY2tlZCA9IGZhbHNlOyAvLyBpZiB0aGlzIGlzIFwidHJ1ZVwiLCBhZGRDaGlsZCB3aWxsIGZhaWxcbiAgcHJpdmF0ZSByZWFkb25seSBfY2hpbGRyZW46IHsgW2lkOiBzdHJpbmddOiBJQ29uc3RydWN0IH0gPSB7IH07XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbnRleHQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7IH07XG4gIHByaXZhdGUgcmVhZG9ubHkgX21ldGFkYXRhID0gbmV3IEFycmF5PE1ldGFkYXRhRW50cnk+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RlcGVuZGVuY2llcyA9IG5ldyBTZXQ8SURlcGVuZGFibGU+KCk7XG4gIHByaXZhdGUgX2RlZmF1bHRDaGlsZDogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfdmFsaWRhdGlvbnMgPSBuZXcgQXJyYXk8SVZhbGlkYXRpb24+KCk7XG4gIHByaXZhdGUgX2FkZHI/OiBzdHJpbmc7IC8vIGNhY2hlXG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaG9zdDogQ29uc3RydWN0LCBzY29wZTogSUNvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIGlkID0gaWQgPz8gJyc7IC8vIGlmIHVuZGVmaW5lZCwgY29udmVydCB0byBlbXB0eSBzdHJpbmdcblxuICAgIHRoaXMuaWQgPSBzYW5pdGl6ZUlkKGlkKTtcbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG5cbiAgICBpZiAoc2NvcGUgJiYgIXRoaXMuaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT25seSByb290IGNvbnN0cnVjdHMgbWF5IGhhdmUgYW4gZW1wdHkgSUQnKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG8gcGFyZW50IHNjb3BlXG4gICAgc2NvcGU/Lm5vZGUuYWRkQ2hpbGQoaG9zdCwgdGhpcy5pZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bGwsIGFic29sdXRlIHBhdGggb2YgdGhpcyBjb25zdHJ1Y3QgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIENvbXBvbmVudHMgYXJlIHNlcGFyYXRlZCBieSAnLycuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiB0aGlzLnNjb3Blcykge1xuICAgICAgaWYgKHNjb3BlLm5vZGUuaWQpIHtcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHNjb3BlLm5vZGUuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cy5qb2luKE5vZGUuUEFUSF9TRVApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3BhcXVlIHRyZWUtdW5pcXVlIGFkZHJlc3MgZm9yIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBBZGRyZXNzZXMgYXJlIDQyIGNoYXJhY3RlcnMgaGV4YWRlY2ltYWwgc3RyaW5ncy4gVGhleSBiZWdpbiB3aXRoIFwiYzhcIlxuICAgKiBmb2xsb3dlZCBieSA0MCBsb3dlcmNhc2UgaGV4YWRlY2ltYWwgY2hhcmFjdGVycyAoMC05YS1mKS5cbiAgICpcbiAgICogQWRkcmVzc2VzIGFyZSBjYWxjdWxhdGVkIHVzaW5nIGEgU0hBLTEgb2YgdGhlIGNvbXBvbmVudHMgb2YgdGhlIGNvbnN0cnVjdFxuICAgKiBwYXRoLlxuICAgKlxuICAgKiBUbyBlbmFibGUgcmVmYWN0b3JpbmdzIG9mIGNvbnN0cnVjdCB0cmVlcywgY29uc3RydWN0cyB3aXRoIHRoZSBJRCBgRGVmYXVsdGBcbiAgICogd2lsbCBiZSBleGNsdWRlZCBmcm9tIHRoZSBjYWxjdWxhdGlvbi4gSW4gdGhvc2UgY2FzZXMgY29uc3RydWN0cyBpbiB0aGVcbiAgICogc2FtZSB0cmVlIG1heSBoYXZlIHRoZSBzYW1lIGFkZHJlZXNzLlxuICAgKlxuICAgKiBAZXhhbXBsZSBjODNhMjg0NmU1MDZiY2M1ZjEwNjgyYjU2NDA4NGJjYTJkMjc1NzA5ZWVcbiAgICovXG4gIHB1YmxpYyBnZXQgYWRkcigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fYWRkcikge1xuICAgICAgdGhpcy5fYWRkciA9IGFkZHJlc3NPZih0aGlzLnNjb3Blcy5tYXAoYyA9PiBjLm5vZGUuaWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWRkcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBkaXJlY3QgY2hpbGQgYnkgaWQsIG9yIHVuZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0gaWQgSWRlbnRpZmllciBvZiBkaXJlY3QgY2hpbGRcbiAgICogQHJldHVybnMgdGhlIGNoaWxkIGlmIGZvdW5kLCBvciB1bmRlZmluZWRcbiAgICovXG4gIHB1YmxpYyB0cnlGaW5kQ2hpbGQoaWQ6IHN0cmluZyk6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbltzYW5pdGl6ZUlkKGlkKV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgZGlyZWN0IGNoaWxkIGJ5IGlkXG4gICAqXG4gICAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgY2hpbGQgaXMgbm90IGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gaWQgSWRlbnRpZmllciBvZiBkaXJlY3QgY2hpbGRcbiAgICogQHJldHVybnMgQ2hpbGQgd2l0aCB0aGUgZ2l2ZW4gaWQuXG4gICAqL1xuICBwdWJsaWMgZmluZENoaWxkKGlkOiBzdHJpbmcpOiBJQ29uc3RydWN0IHtcbiAgICBjb25zdCByZXQgPSB0aGlzLnRyeUZpbmRDaGlsZChpZCk7XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY2hpbGQgd2l0aCBpZDogJyR7aWR9J2ApO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNoaWxkIGNvbnN0cnVjdCB0aGF0IGhhcyB0aGUgaWQgYERlZmF1bHRgIG9yIGBSZXNvdXJjZVwiYC5cbiAgICogVGhpcyBpcyB1c3VhbGx5IHRoZSBjb25zdHJ1Y3QgdGhhdCBwcm92aWRlcyB0aGUgYnVsayBvZiB0aGUgdW5kZXJseWluZyBmdW5jdGlvbmFsaXR5LlxuICAgKiBVc2VmdWwgZm9yIG1vZGlmaWNhdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgY29uc3RydWN0IHRoYXQgYXJlIG5vdCBhdmFpbGFibGUgYXQgdGhlIGhpZ2hlciBsZXZlbHMuXG4gICAqXG4gICAqIEB0aHJvd3MgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBjaGlsZFxuICAgKiBAcmV0dXJucyBhIGNvbnN0cnVjdCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gZGVmYXVsdCBjaGlsZFxuICAgKi9cbiAgcHVibGljIGdldCBkZWZhdWx0Q2hpbGQoKTogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRDaGlsZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENoaWxkO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc291cmNlQ2hpbGQgPSB0aGlzLnRyeUZpbmRDaGlsZCgnUmVzb3VyY2UnKTtcbiAgICBjb25zdCBkZWZhdWx0Q2hpbGQgPSB0aGlzLnRyeUZpbmRDaGlsZCgnRGVmYXVsdCcpO1xuICAgIGlmIChyZXNvdXJjZUNoaWxkICYmIGRlZmF1bHRDaGlsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGV0ZXJtaW5lIGRlZmF1bHQgY2hpbGQgZm9yICR7dGhpcy5wYXRofS4gVGhlcmUgaXMgYm90aCBhIGNoaWxkIHdpdGggaWQgXCJSZXNvdXJjZVwiIGFuZCBpZCBcIkRlZmF1bHRcImApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0Q2hpbGQgfHwgcmVzb3VyY2VDaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdENoaWxkIHByb3BlcnR5LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdGhlIGNhc2VzIHdoZXJlIHRoZSBjb3JyZWN0XG4gICAqIGRlZmF1bHQgY2hpbGQgaXMgbm90IG5hbWVkICdSZXNvdXJjZScgb3IgJ0RlZmF1bHQnIGFzIGl0XG4gICAqIHNob3VsZCBiZS5cbiAgICpcbiAgICogSWYgeW91IHNldCB0aGlzIHRvIHVuZGVmaW5lZCwgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgZmluZGluZ1xuICAgKiB0aGUgY2hpbGQgbmFtZWQgJ1Jlc291cmNlJyBvciAnRGVmYXVsdCcgd2lsbCBiZSB1c2VkLlxuICAgKi9cbiAgcHVibGljIHNldCBkZWZhdWx0Q2hpbGQodmFsdWU6IElDb25zdHJ1Y3QgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q2hpbGQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgZGlyZWN0IGNoaWxkcmVuIG9mIHRoaXMgY29uc3RydWN0LlxuICAgKi9cbiAgcHVibGljIGdldCBjaGlsZHJlbigpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoaXMgY29uc3RydWN0IGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuIGluIHRoZSBnaXZlbiBvcmRlclxuICAgKi9cbiAgcHVibGljIGZpbmRBbGwob3JkZXI6IENvbnN0cnVjdE9yZGVyID0gQ29uc3RydWN0T3JkZXIuUFJFT1JERVIpOiBJQ29uc3RydWN0W10ge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxJQ29uc3RydWN0PigpO1xuICAgIHZpc2l0KHRoaXMuaG9zdCk7XG4gICAgcmV0dXJuIHJldDtcblxuICAgIGZ1bmN0aW9uIHZpc2l0KGM6IElDb25zdHJ1Y3QpIHtcbiAgICAgIGlmIChvcmRlciA9PT0gQ29uc3RydWN0T3JkZXIuUFJFT1JERVIpIHtcbiAgICAgICAgcmV0LnB1c2goYyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgYy5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIHZpc2l0KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yZGVyID09PSBDb25zdHJ1Y3RPcmRlci5QT1NUT1JERVIpIHtcbiAgICAgICAgcmV0LnB1c2goYyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gc2V0IGNvbnRleHR1YWwgdmFsdWVzLlxuICAgKiBDb250ZXh0IG11c3QgYmUgc2V0IGJlZm9yZSBhbnkgY2hpbGRyZW4gYXJlIGFkZGVkLCBzaW5jZSBjaGlsZHJlbiBtYXkgY29uc3VsdCBjb250ZXh0IGluZm8gZHVyaW5nIGNvbnN0cnVjdGlvbi5cbiAgICogSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBiZSBvdmVycmlkZGVuLlxuICAgKiBAcGFyYW0ga2V5IFRoZSBjb250ZXh0IGtleVxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIGNvbnRleHQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXRDb250ZXh0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMubm9kZS5pZCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgY29udGV4dCBhZnRlciBjaGlsZHJlbiBoYXZlIGJlZW4gYWRkZWQ6ICcgKyBuYW1lcy5qb2luKCcsJykpO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0W2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSB2YWx1ZSBmcm9tIHRyZWUgY29udGV4dCBpZiBwcmVzZW50LiBPdGhlcndpc2UsIHdvdWxkIHRocm93IGFuIGVycm9yLlxuICAgKlxuICAgKiBDb250ZXh0IGlzIHVzdWFsbHkgaW5pdGlhbGl6ZWQgYXQgdGhlIHJvb3QsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBhbnkgcG9pbnQgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IHZhbHVlIG9yIHRocm93cyBlcnJvciBpZiB0aGVyZSBpcyBubyBjb250ZXh0IHZhbHVlIGZvciB0aGlzIGtleVxuICAgKi9cbiAgcHVibGljIGdldENvbnRleHQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fY29udGV4dFtrZXldO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhdGhpcy5zY29wZT8ubm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb250ZXh0IHZhbHVlIHByZXNlbnQgZm9yICR7a2V5fSBrZXlgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zY29wZSAmJiB0aGlzLnNjb3BlLm5vZGUuZ2V0Q29udGV4dChrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgYWxsIGNvbnRleHQgb2YgYSBub2RlIGZyb20gdHJlZSBjb250ZXh0LlxuICAgKlxuICAgKiBDb250ZXh0IGlzIHVzdWFsbHkgaW5pdGlhbGl6ZWQgYXQgdGhlIHJvb3QsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBhbnkgcG9pbnQgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIEBwYXJhbSBkZWZhdWx0cyBBbnkga2V5cyB0byBvdmVycmlkZSB0aGUgcmV0cmlldmVkIGNvbnRleHRcbiAgICogQHJldHVybnMgVGhlIGNvbnRleHQgb2JqZWN0IG9yIGFuIGVtcHR5IG9iamVjdCBpZiB0aGVyZSBpcyBkaXNjb3ZlcmVkIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBnZXRBbGxDb250ZXh0KGRlZmF1bHRzPzogb2JqZWN0KTogYW55IHtcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZGVmYXVsdHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY29wZSA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiBkZWZhdWx0czsgfVxuXG4gICAgY29uc3QgdmFsdWUgPSB7IC4uLnRoaXMuX2NvbnRleHQsIC4uLmRlZmF1bHRzIH07XG4gICAgcmV0dXJuIHRoaXMuc2NvcGUgJiYgdGhpcy5zY29wZS5ub2RlLmdldEFsbENvbnRleHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhIHZhbHVlIGZyb20gdHJlZSBjb250ZXh0LlxuICAgKlxuICAgKiBDb250ZXh0IGlzIHVzdWFsbHkgaW5pdGlhbGl6ZWQgYXQgdGhlIHJvb3QsIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBhbnkgcG9pbnQgaW4gdGhlIHRyZWUuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgVGhlIGNvbnRleHQga2V5XG4gICAqIEByZXR1cm5zIFRoZSBjb250ZXh0IHZhbHVlIG9yIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIGNvbnRleHQgdmFsdWUgZm9yIHRoaXMga2V5LlxuICAgKi9cbiAgcHVibGljIHRyeUdldENvbnRleHQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fY29udGV4dFtrZXldO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybiB2YWx1ZTsgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2NvcGUgJiYgdGhpcy5zY29wZS5ub2RlLnRyeUdldENvbnRleHQoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbW11dGFibGUgYXJyYXkgb2YgbWV0YWRhdGEgb2JqZWN0cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb25zdHJ1Y3QuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQsIGZvciBleGFtcGxlLCB0byBpbXBsZW1lbnQgc3VwcG9ydCBmb3IgZGVwcmVjYXRpb24gbm90aWNlcywgc291cmNlIG1hcHBpbmcsIGV0Yy5cbiAgICovXG4gIHB1YmxpYyBnZXQgbWV0YWRhdGEoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9tZXRhZGF0YV07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1ldGFkYXRhIGVudHJ5IHRvIHRoaXMgY29uc3RydWN0LlxuICAgKiBFbnRyaWVzIGFyZSBhcmJpdHJhcnkgdmFsdWVzIGFuZCB3aWxsIGFsc28gaW5jbHVkZSBhIHN0YWNrIHRyYWNlIHRvIGFsbG93IHRyYWNpbmcgYmFjayB0b1xuICAgKiB0aGUgY29kZSBsb2NhdGlvbiBmb3Igd2hlbiB0aGUgZW50cnkgd2FzIGFkZGVkLiBJdCBjYW4gYmUgdXNlZCwgZm9yIGV4YW1wbGUsIHRvIGluY2x1ZGUgc291cmNlXG4gICAqIG1hcHBpbmcgaW4gQ2xvdWRGb3JtYXRpb24gdGVtcGxhdGVzIHRvIGltcHJvdmUgZGlhZ25vc3RpY3MuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIGEgc3RyaW5nIGRlbm90aW5nIHRoZSB0eXBlIG9mIG1ldGFkYXRhXG4gICAqIEBwYXJhbSBkYXRhIHRoZSB2YWx1ZSBvZiB0aGUgbWV0YWRhdGEgKGNhbiBiZSBhIFRva2VuKS4gSWYgbnVsbC91bmRlZmluZWQsIG1ldGFkYXRhIHdpbGwgbm90IGJlIGFkZGVkLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgYWRkTWV0YWRhdGEodHlwZTogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM6IE1ldGFkYXRhT3B0aW9ucyA9IHsgfSk6IHZvaWQge1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRUcmFjZSA9IG9wdGlvbnMuc3RhY2tUcmFjZSA/PyBmYWxzZTtcbiAgICBjb25zdCB0cmFjZSA9IHNob3VsZFRyYWNlID8gY2FwdHVyZVN0YWNrVHJhY2Uob3B0aW9ucy50cmFjZUZyb21GdW5jdGlvbiA/PyB0aGlzLmFkZE1ldGFkYXRhKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9tZXRhZGF0YS5wdXNoKHsgdHlwZSwgZGF0YSwgdHJhY2UgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIHBhcmVudCBzY29wZXMgb2YgdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIEByZXR1cm5zIGEgbGlzdCBvZiBwYXJlbnQgc2NvcGVzLiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0IHdpbGwgYWx3YXlzXG4gICAqIGJlIHRoZSBjdXJyZW50IGNvbnN0cnVjdCBhbmQgdGhlIGZpcnN0IGVsZW1lbnQgd2lsbCBiZSB0aGUgcm9vdCBvZiB0aGVcbiAgICogdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2NvcGVzKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG5cbiAgICBsZXQgY3VycjogSUNvbnN0cnVjdCB8IHVuZGVmaW5lZCA9IHRoaXMuaG9zdDtcbiAgICB3aGlsZSAoY3Vycikge1xuICAgICAgcmV0LnVuc2hpZnQoY3Vycik7XG4gICAgICBjdXJyID0gY3Vyci5ub2RlLnNjb3BlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcm9vdCBvZiB0aGUgY29uc3RydWN0IHRyZWUuXG4gICAqIEByZXR1cm5zIFRoZSByb290IG9mIHRoZSBjb25zdHJ1Y3QgdHJlZS5cbiAgICovXG4gIHB1YmxpYyBnZXQgcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zY29wZXNbMF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29uc3RydWN0IG9yIHRoZSBzY29wZXMgaW4gd2hpY2ggaXQgaXMgZGVmaW5lZCBhcmVcbiAgICogbG9ja2VkLlxuICAgKi9cbiAgcHVibGljIGdldCBsb2NrZWQoKSB7XG4gICAgaWYgKHRoaXMuX2xvY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NvcGUgJiYgdGhpcy5zY29wZS5ub2RlLmxvY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBvcmRlcmluZyBkZXBlbmRlbmN5IG9uIGFub3RoZXIgY29uc3RydWN0LlxuICAgKlxuICAgKiBBbiBgSURlcGVuZGFibGVgXG4gICAqL1xuICBwdWJsaWMgYWRkRGVwZW5kZW5jeSguLi5kZXBzOiBJRGVwZW5kYWJsZVtdKSB7XG4gICAgZm9yIChjb25zdCBkIG9mIGRlcHMpIHtcbiAgICAgIHRoaXMuX2RlcGVuZGVuY2llcy5hZGQoZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgZGVwZW5kZW5jaWVzIHJlZ2lzdGVyZWQgb24gdGhpcyBub2RlIChub24tcmVjdXJzaXZlKS5cbiAgICovXG4gIHB1YmxpYyBnZXQgZGVwZW5kZW5jaWVzKCk6IElDb25zdHJ1Y3RbXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PElDb25zdHJ1Y3Q+KCk7XG4gICAgZm9yIChjb25zdCBkZXAgb2YgdGhpcy5fZGVwZW5kZW5jaWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvb3Qgb2YgRGVwZW5kYWJsZS5vZihkZXApLmRlcGVuZGVuY3lSb290cykge1xuICAgICAgICByZXN1bHQucHVzaChyb290KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgaWYgcHJlc2VudC5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciBhIGNoaWxkIHdpdGggdGhlIGdpdmVuIG5hbWUgd2FzIGRlbGV0ZWQuXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHB1YmxpYyB0cnlSZW1vdmVDaGlsZChjaGlsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghKGNoaWxkTmFtZSBpbiB0aGlzLl9jaGlsZHJlbikpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2NoaWxkTmFtZV07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbGlkYXRpb24gdG8gdGhpcyBjb25zdHJ1Y3QuXG4gICAqXG4gICAqIFdoZW4gYG5vZGUudmFsaWRhdGUoKWAgaXMgY2FsbGVkLCB0aGUgYHZhbGlkYXRlKClgIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBvblxuICAgKiBhbGwgdmFsaWRhdGlvbnMgYW5kIGFsbCBlcnJvcnMgd2lsbCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbGlkYXRpb24gVGhlIHZhbGlkYXRpb24gb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkVmFsaWRhdGlvbih2YWxpZGF0aW9uOiBJVmFsaWRhdGlvbikge1xuICAgIHRoaXMuX3ZhbGlkYXRpb25zLnB1c2godmFsaWRhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoaXMgY29uc3RydWN0LlxuICAgKlxuICAgKiBJbnZva2VzIHRoZSBgdmFsaWRhdGUoKWAgbWV0aG9kIG9uIGFsbCB2YWxpZGF0aW9ucyBhZGRlZCB0aHJvdWdoXG4gICAqIGBhZGRWYWxpZGF0aW9uKClgLlxuICAgKlxuICAgKiBAcmV0dXJucyBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzXG4gICAqIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZGVwcmVjYXRlZCA9IFsndmFsaWRhdGUnLCAnb25WYWxpZGF0ZScsICdzeW50aGVzaXplJywgJ29uU3ludGhlc2l6ZScsICdwcmVwYXJlJywgJ29uUHJlcGFyZSddO1xuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIGRlcHJlY2F0ZWQpIHtcbiAgICAgIGlmICh0eXBlb2YoKHRoaXMuaG9zdCBhcyBhbnkpW21ldGhvZF0pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGNvbnN0cnVjdCBcIiR7dGhpcy5wYXRofVwiIGhhcyBhIFwiJHttZXRob2R9KClcIiBtZXRob2Qgd2hpY2ggaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gVXNlIFwiY29uc3RydWN0Lm5vZGUuYWRkVmFsaWRhdGlvbigpXCIgdG8gYWRkIHZhbGlkYXRpb25zIHRvIGEgY29uc3RydWN0YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IHYgb2YgdGhpcy5fdmFsaWRhdGlvbnMpIHtcbiAgICAgIGVycm9ycy5wdXNoKC4uLnYudmFsaWRhdGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrcyB0aGlzIGNvbnN0cnVjdCBmcm9tIGFsbG93aW5nIG1vcmUgY2hpbGRyZW4gdG8gYmUgYWRkZWQuIEFmdGVyIHRoaXNcbiAgICogY2FsbCwgbm8gbW9yZSBjaGlsZHJlbiBjYW4gYmUgYWRkZWQgdG8gdGhpcyBjb25zdHJ1Y3Qgb3IgdG8gYW55IGNoaWxkcmVuLlxuICAgKi9cbiAgcHVibGljIGxvY2soKSB7XG4gICAgdGhpcy5fbG9ja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hpbGQgY29uc3RydWN0IHRvIHRoaXMgbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIGNoaWxkIFRoZSBjaGlsZCBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIGNoaWxkTmFtZSBUaGUgdHlwZSBuYW1lIG9mIHRoZSBjaGlsZCBjb25zdHJ1Y3QuXG4gICAqIEByZXR1cm5zIFRoZSByZXNvbHZlZCBwYXRoIHBhcnQgbmFtZSBvZiB0aGUgY2hpbGRcbiAgICovXG4gIHByaXZhdGUgYWRkQ2hpbGQoY2hpbGQ6IENvbnN0cnVjdCwgY2hpbGROYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcblxuICAgICAgLy8gc3BlY2lhbCBlcnJvciBpZiByb290IGlzIGxvY2tlZFxuICAgICAgaWYgKCF0aGlzLnBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYWRkIGNoaWxkcmVuIGR1cmluZyBzeW50aGVzaXMnKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYWRkIGNoaWxkcmVuIHRvIFwiJHt0aGlzLnBhdGh9XCIgZHVyaW5nIHN5bnRoZXNpc2ApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jaGlsZHJlbltjaGlsZE5hbWVdKSB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5pZCA/PyAnJztcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5ob3N0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIGFscmVhZHkgYSBDb25zdHJ1Y3Qgd2l0aCBuYW1lICcke2NoaWxkTmFtZX0nIGluICR7dHlwZU5hbWV9JHtuYW1lLmxlbmd0aCA+IDAgPyAnIFsnICsgbmFtZSArICddJyA6ICcnfWApO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuW2NoaWxkTmFtZV0gPSBjaGlsZDtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGJ1aWxkaW5nIGJsb2NrIG9mIHRoZSBjb25zdHJ1Y3QgZ3JhcGguXG4gKlxuICogQWxsIGNvbnN0cnVjdHMgYmVzaWRlcyB0aGUgcm9vdCBjb25zdHJ1Y3QgbXVzdCBiZSBjcmVhdGVkIHdpdGhpbiB0aGUgc2NvcGUgb2ZcbiAqIGFub3RoZXIgY29uc3RydWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29uc3RydWN0IGltcGxlbWVudHMgSUNvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYHhgIGlzIGEgY29uc3RydWN0LlxuICAgKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiBgaW5zdGFuY2VvZmAgdG8gcHJvcGVybHkgZGV0ZWN0IGBDb25zdHJ1Y3RgXG4gICAqIGluc3RhbmNlcywgZXZlbiB3aGVuIHRoZSBjb25zdHJ1Y3QgbGlicmFyeSBpcyBzeW1saW5rZWQuXG4gICAqXG4gICAqIEV4cGxhbmF0aW9uOiBpbiBKYXZhU2NyaXB0LCBtdWx0aXBsZSBjb3BpZXMgb2YgdGhlIGBjb25zdHJ1Y3RzYCBsaWJyYXJ5IG9uXG4gICAqIGRpc2sgYXJlIHNlZW4gYXMgaW5kZXBlbmRlbnQsIGNvbXBsZXRlbHkgZGlmZmVyZW50IGxpYnJhcmllcy4gQXMgYVxuICAgKiBjb25zZXF1ZW5jZSwgdGhlIGNsYXNzIGBDb25zdHJ1Y3RgIGluIGVhY2ggY29weSBvZiB0aGUgYGNvbnN0cnVjdHNgIGxpYnJhcnlcbiAgICogaXMgc2VlbiBhcyBhIGRpZmZlcmVudCBjbGFzcywgYW5kIGFuIGluc3RhbmNlIG9mIG9uZSBjbGFzcyB3aWxsIG5vdCB0ZXN0IGFzXG4gICAqIGBpbnN0YW5jZW9mYCB0aGUgb3RoZXIgY2xhc3MuIGBucG0gaW5zdGFsbGAgd2lsbCBub3QgY3JlYXRlIGluc3RhbGxhdGlvbnNcbiAgICogbGlrZSB0aGlzLCBidXQgdXNlcnMgbWF5IG1hbnVhbGx5IHN5bWxpbmsgY29uc3RydWN0IGxpYnJhcmllcyB0b2dldGhlciBvclxuICAgKiB1c2UgYSBtb25vcmVwbyB0b29sOiBpbiB0aG9zZSBjYXNlcywgbXVsdGlwbGUgY29waWVzIG9mIHRoZSBgY29uc3RydWN0c2BcbiAgICogbGlicmFyeSBjYW4gYmUgYWNjaWRlbnRhbGx5IGluc3RhbGxlZCwgYW5kIGBpbnN0YW5jZW9mYCB3aWxsIGJlaGF2ZVxuICAgKiB1bnByZWRpY3RhYmx5LiBJdCBpcyBzYWZlc3QgdG8gYXZvaWQgdXNpbmcgYGluc3RhbmNlb2ZgLCBhbmQgdXNpbmdcbiAgICogdGhpcyB0eXBlLXRlc3RpbmcgbWV0aG9kIGluc3RlYWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgYHhgIGlzIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gYSBjbGFzcyB3aGljaCBleHRlbmRzIGBDb25zdHJ1Y3RgLlxuICAgKiBAcGFyYW0geCBBbnkgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzQ29uc3RydWN0KHg6IGFueSk6IHggaXMgQ29uc3RydWN0IHtcbiAgICByZXR1cm4geCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeFtDT05TVFJVQ1RfU1lNXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdHJlZSBub2RlLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IG5vZGU6IE5vZGU7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29uc3RydWN0IG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncy4gSWZcbiAgICogdGhlIElEIGluY2x1ZGVzIGEgcGF0aCBzZXBhcmF0b3IgKGAvYCksIHRoZW4gaXQgd2lsbCBiZSByZXBsYWNlZCBieSBkb3VibGVcbiAgICogZGFzaCBgLS1gLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHRoaXMubm9kZSA9IG5ldyBOb2RlKHRoaXMsIHNjb3BlLCBpZCk7XG5cbiAgICAvLyBpbXBsZW1lbnQgSURlcGVuZGFibGUgcHJpdmF0ZWx5XG4gICAgRGVwZW5kYWJsZS5pbXBsZW1lbnQodGhpcywge1xuICAgICAgZGVwZW5kZW5jeVJvb3RzOiBbdGhpc10sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGNvbnN0cnVjdC5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLnBhdGggfHwgJzxyb290Pic7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgaW4gb3JkZXIgZm9yIHRoZSBjb25zdHJ1Y3QgdG8gYmUgYWJsZSB0byB2YWxpZGF0ZSBpdHNlbGYuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb24ge1xuICAvKipcbiAgICogVmFsaWRhdGUgdGhlIGN1cnJlbnQgY29uc3RydWN0LlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgaW1wbGVtZW50ZWQgYnkgZGVyaXZlZCBjb25zdHJ1Y3RzIGluIG9yZGVyIHRvIHBlcmZvcm1cbiAgICogdmFsaWRhdGlvbiBsb2dpYy4gSXQgaXMgY2FsbGVkIG9uIGFsbCBjb25zdHJ1Y3RzIGJlZm9yZSBzeW50aGVzaXMuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3IgbWVzc2FnZXMsIG9yIGFuIGVtcHR5IGFycmF5IGlmIHRoZXJlIHRoZSBjb25zdHJ1Y3QgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZSgpOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBJbiB3aGF0IG9yZGVyIHRvIHJldHVybiBjb25zdHJ1Y3RzXG4gKi9cbmV4cG9ydCBlbnVtIENvbnN0cnVjdE9yZGVyIHtcbiAgLyoqXG4gICAqIERlcHRoLWZpcnN0LCBwcmUtb3JkZXJcbiAgICovXG4gIFBSRU9SREVSLFxuXG4gIC8qKlxuICAgKiBEZXB0aC1maXJzdCwgcG9zdC1vcmRlciAobGVhZiBub2RlcyBmaXJzdClcbiAgICovXG4gIFBPU1RPUkRFUlxufVxuXG5jb25zdCBQQVRIX1NFUF9SRUdFWCA9IG5ldyBSZWdFeHAoYCR7Tm9kZS5QQVRIX1NFUH1gLCAnZycpO1xuXG4vKipcbiAqIFJldHVybiBhIHNhbml0aXplZCB2ZXJzaW9uIG9mIGFuIGFyYml0cmFyeSBzdHJpbmcsIHNvIGl0IGNhbiBiZSB1c2VkIGFzIGFuIElEXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplSWQoaWQ6IHN0cmluZykge1xuICAvLyBFc2NhcGUgcGF0aCBzZXBzIGFzIGRvdWJsZSBkYXNoZXNcbiAgcmV0dXJuIGlkLnJlcGxhY2UoUEFUSF9TRVBfUkVHRVgsICctLScpO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGBjb25zdHJ1Y3QuYWRkTWV0YWRhdGEoKWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFPcHRpb25zIHtcbiAgLyoqXG4gICAqIEluY2x1ZGUgc3RhY2sgdHJhY2Ugd2l0aCBtZXRhZGF0YSBlbnRyeS5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrVHJhY2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIEphdmFTY3JpcHQgZnVuY3Rpb24gdG8gYmVnaW4gdHJhY2luZyBmcm9tLlxuICAgKlxuICAgKiBUaGlzIG9wdGlvbiBpcyBpZ25vcmVkIHVubGVzcyBgc3RhY2tUcmFjZWAgaXMgYHRydWVgLlxuICAgKlxuICAgKiBAZGVmYXVsdCBhZGRNZXRhZGF0YSgpXG4gICAqL1xuICByZWFkb25seSB0cmFjZUZyb21GdW5jdGlvbj86IGFueTtcbn1cblxuLy8gTWFyayBhbGwgaW5zdGFuY2VzIG9mICdDb25zdHJ1Y3QnXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0LnByb3RvdHlwZSwgQ09OU1RSVUNUX1NZTSwge1xuICB2YWx1ZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbn0pO1xuIl19