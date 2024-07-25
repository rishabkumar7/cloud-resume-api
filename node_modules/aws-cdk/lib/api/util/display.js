"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewritableBlock = void 0;
// namespace object imports won't work in the bundle for function exports
// eslint-disable-next-line @typescript-eslint/no-require-imports
const wrapAnsi = require('wrap-ansi');
/**
 * A class representing rewritable display lines
 */
class RewritableBlock {
    constructor(stream) {
        this.stream = stream;
        this.lastHeight = 0;
        this.trailingEmptyLines = 0;
    }
    get width() {
        // Might get changed if the user resizes the terminal
        return this.stream.columns;
    }
    get height() {
        // Might get changed if the user resizes the terminal
        return this.stream.rows;
    }
    displayLines(lines) {
        lines = terminalWrap(this.width, expandNewlines(lines));
        lines = lines.slice(0, getMaxBlockHeight(this.height, this.lastHeight, lines));
        this.stream.write(cursorUp(this.lastHeight));
        for (const line of lines) {
            this.stream.write(cll() + line + '\n');
        }
        this.trailingEmptyLines = Math.max(0, this.lastHeight - lines.length);
        // Clear remainder of unwritten lines
        for (let i = 0; i < this.trailingEmptyLines; i++) {
            this.stream.write(cll() + '\n');
        }
        // The block can only ever get bigger
        this.lastHeight = Math.max(this.lastHeight, lines.length);
    }
    removeEmptyLines() {
        this.stream.write(cursorUp(this.trailingEmptyLines));
    }
}
exports.RewritableBlock = RewritableBlock;
const ESC = '\u001b';
/*
 * Move cursor up `n` lines. Default is 1
 */
function cursorUp(n) {
    n = typeof n === 'number' ? n : 1;
    return n > 0 ? ESC + '[' + n + 'A' : '';
}
/**
 * Clear to end of line
 */
function cll() {
    return ESC + '[K';
}
function terminalWrap(width, lines) {
    if (width === undefined) {
        return lines;
    }
    return lines.flatMap(line => wrapAnsi(line, width - 1, {
        hard: true,
        trim: true,
        wordWrap: false,
    }).split('\n'));
}
/**
 * Make sure there are no hidden newlines in the gin strings
 */
function expandNewlines(lines) {
    return lines.flatMap(line => line.split('\n'));
}
function getMaxBlockHeight(windowHeight, lastHeight, lines) {
    if (windowHeight === undefined) {
        return Math.max(lines.length, lastHeight);
    }
    return lines.length < windowHeight ? lines.length : windowHeight - 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc3BsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQXlFO0FBQ3pFLGlFQUFpRTtBQUNqRSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFdEM7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFJMUIsWUFBNkIsTUFBMEI7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFIL0MsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLHVCQUFrQixHQUFHLENBQUMsQ0FBQztJQUcvQixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QscURBQXFEO1FBQ3JELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLHFEQUFxRDtRQUNyRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBZTtRQUNqQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM3QyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRFLHFDQUFxQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUF4Q0QsMENBd0NDO0FBRUQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBRXJCOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQUMsQ0FBUztJQUN6QixDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsR0FBRztJQUNWLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBeUIsRUFBRSxLQUFlO0lBQzlELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQUMsT0FBTyxLQUFLLENBQUM7SUFBQyxDQUFDO0lBRTFDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUNyRCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFDLEtBQWU7SUFDckMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFlBQWdDLEVBQUUsVUFBa0IsRUFBRSxLQUFlO0lBQzlGLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFBQyxDQUFDO0lBQzlFLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hbWVzcGFjZSBvYmplY3QgaW1wb3J0cyB3b24ndCB3b3JrIGluIHRoZSBidW5kbGUgZm9yIGZ1bmN0aW9uIGV4cG9ydHNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCB3cmFwQW5zaSA9IHJlcXVpcmUoJ3dyYXAtYW5zaScpO1xuXG4vKipcbiAqIEEgY2xhc3MgcmVwcmVzZW50aW5nIHJld3JpdGFibGUgZGlzcGxheSBsaW5lc1xuICovXG5leHBvcnQgY2xhc3MgUmV3cml0YWJsZUJsb2NrIHtcbiAgcHJpdmF0ZSBsYXN0SGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSB0cmFpbGluZ0VtcHR5TGluZXMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtOiBOb2RlSlMuV3JpdGVTdHJlYW0pIHtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGgoKSB7XG4gICAgLy8gTWlnaHQgZ2V0IGNoYW5nZWQgaWYgdGhlIHVzZXIgcmVzaXplcyB0aGUgdGVybWluYWxcbiAgICByZXR1cm4gdGhpcy5zdHJlYW0uY29sdW1ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xuICAgIC8vIE1pZ2h0IGdldCBjaGFuZ2VkIGlmIHRoZSB1c2VyIHJlc2l6ZXMgdGhlIHRlcm1pbmFsXG4gICAgcmV0dXJuIHRoaXMuc3RyZWFtLnJvd3M7XG4gIH1cblxuICBwdWJsaWMgZGlzcGxheUxpbmVzKGxpbmVzOiBzdHJpbmdbXSkge1xuICAgIGxpbmVzID0gdGVybWluYWxXcmFwKHRoaXMud2lkdGgsIGV4cGFuZE5ld2xpbmVzKGxpbmVzKSk7XG4gICAgbGluZXMgPSBsaW5lcy5zbGljZSgwLCBnZXRNYXhCbG9ja0hlaWdodCh0aGlzLmhlaWdodCwgdGhpcy5sYXN0SGVpZ2h0LCBsaW5lcykpO1xuXG4gICAgdGhpcy5zdHJlYW0ud3JpdGUoY3Vyc29yVXAodGhpcy5sYXN0SGVpZ2h0KSk7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICB0aGlzLnN0cmVhbS53cml0ZShjbGwoKSArIGxpbmUgKyAnXFxuJyk7XG4gICAgfVxuXG4gICAgdGhpcy50cmFpbGluZ0VtcHR5TGluZXMgPSBNYXRoLm1heCgwLCB0aGlzLmxhc3RIZWlnaHQgLSBsaW5lcy5sZW5ndGgpO1xuXG4gICAgLy8gQ2xlYXIgcmVtYWluZGVyIG9mIHVud3JpdHRlbiBsaW5lc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFpbGluZ0VtcHR5TGluZXM7IGkrKykge1xuICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoY2xsKCkgKyAnXFxuJyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGJsb2NrIGNhbiBvbmx5IGV2ZXIgZ2V0IGJpZ2dlclxuICAgIHRoaXMubGFzdEhlaWdodCA9IE1hdGgubWF4KHRoaXMubGFzdEhlaWdodCwgbGluZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFbXB0eUxpbmVzKCkge1xuICAgIHRoaXMuc3RyZWFtLndyaXRlKGN1cnNvclVwKHRoaXMudHJhaWxpbmdFbXB0eUxpbmVzKSk7XG4gIH1cbn1cblxuY29uc3QgRVNDID0gJ1xcdTAwMWInO1xuXG4vKlxuICogTW92ZSBjdXJzb3IgdXAgYG5gIGxpbmVzLiBEZWZhdWx0IGlzIDFcbiAqL1xuZnVuY3Rpb24gY3Vyc29yVXAobjogbnVtYmVyKSB7XG4gIG4gPSB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuIDogMTtcbiAgcmV0dXJuIG4gPiAwID8gRVNDICsgJ1snICsgbiArICdBJyA6ICcnO1xufVxuXG4vKipcbiAqIENsZWFyIHRvIGVuZCBvZiBsaW5lXG4gKi9cbmZ1bmN0aW9uIGNsbCgpIHtcbiAgcmV0dXJuIEVTQyArICdbSyc7XG59XG5cbmZ1bmN0aW9uIHRlcm1pbmFsV3JhcCh3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLCBsaW5lczogc3RyaW5nW10pIHtcbiAgaWYgKHdpZHRoID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIGxpbmVzOyB9XG5cbiAgcmV0dXJuIGxpbmVzLmZsYXRNYXAobGluZSA9PiB3cmFwQW5zaShsaW5lLCB3aWR0aCAtIDEsIHtcbiAgICBoYXJkOiB0cnVlLFxuICAgIHRyaW06IHRydWUsXG4gICAgd29yZFdyYXA6IGZhbHNlLFxuICB9KS5zcGxpdCgnXFxuJykpO1xufVxuXG4vKipcbiAqIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gaGlkZGVuIG5ld2xpbmVzIGluIHRoZSBnaW4gc3RyaW5nc1xuICovXG5mdW5jdGlvbiBleHBhbmROZXdsaW5lcyhsaW5lczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBsaW5lcy5mbGF0TWFwKGxpbmUgPT4gbGluZS5zcGxpdCgnXFxuJykpO1xufVxuXG5mdW5jdGlvbiBnZXRNYXhCbG9ja0hlaWdodCh3aW5kb3dIZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCwgbGFzdEhlaWdodDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBudW1iZXIge1xuICBpZiAod2luZG93SGVpZ2h0ID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIE1hdGgubWF4KGxpbmVzLmxlbmd0aCwgbGFzdEhlaWdodCk7IH1cbiAgcmV0dXJuIGxpbmVzLmxlbmd0aCA8IHdpbmRvd0hlaWdodCA/IGxpbmVzLmxlbmd0aCA6IHdpbmRvd0hlaWdodCAtIDE7XG59Il19