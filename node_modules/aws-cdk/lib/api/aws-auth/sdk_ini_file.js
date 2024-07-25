"use strict";
/**
 * A reimplementation of JS AWS SDK's SharedIniFile class
 *
 * We need that class to parse the ~/.aws/config file to determine the correct
 * region at runtime, but unfortunately it is private upstream.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedIniFile = void 0;
const os = require("os");
const path = require("path");
const AWS = require("aws-sdk");
const fs = require("fs-extra");
class SharedIniFile {
    constructor(options) {
        options = options || {};
        this.isConfig = options.isConfig === true;
        this.filename = options.filename || this.getDefaultFilepath();
    }
    async getProfile(profile) {
        await this.ensureFileLoaded();
        const profileIndex = profile !== AWS.util.defaultProfile && this.isConfig ?
            'profile ' + profile : profile;
        return this.parsedContents[profileIndex];
    }
    getDefaultFilepath() {
        return path.join(os.homedir(), '.aws', this.isConfig ? 'config' : 'credentials');
    }
    async ensureFileLoaded() {
        if (this.parsedContents) {
            return;
        }
        if (!await fs.pathExists(this.filename)) {
            this.parsedContents = {};
            return;
        }
        const contents = (await fs.readFile(this.filename)).toString();
        this.parsedContents = AWS.util.ini.parse(contents);
    }
}
exports.SharedIniFile = SharedIniFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrX2luaV9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2RrX2luaV9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7R0FLRzs7O0FBRUgseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBTy9CLE1BQWEsYUFBYTtJQUt4QixZQUFZLE9BQThCO1FBQ3hDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFFTSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDckMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU5QixNQUFNLFlBQVksR0FBRyxPQUFPLEtBQU0sR0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xGLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVqQyxPQUFPLElBQUksQ0FBQyxjQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNaLE1BQU0sRUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFTyxLQUFLLENBQUMsZ0JBQWdCO1FBQzVCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixPQUFPO1FBQ1QsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLEdBQUksR0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQXpDRCxzQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgcmVpbXBsZW1lbnRhdGlvbiBvZiBKUyBBV1MgU0RLJ3MgU2hhcmVkSW5pRmlsZSBjbGFzc1xuICpcbiAqIFdlIG5lZWQgdGhhdCBjbGFzcyB0byBwYXJzZSB0aGUgfi8uYXdzL2NvbmZpZyBmaWxlIHRvIGRldGVybWluZSB0aGUgY29ycmVjdFxuICogcmVnaW9uIGF0IHJ1bnRpbWUsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGlzIHByaXZhdGUgdXBzdHJlYW0uXG4gKi9cblxuaW1wb3J0ICogYXMgb3MgZnJvbSAnb3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRJbmlGaWxlT3B0aW9ucyB7XG4gIGlzQ29uZmlnPzogYm9vbGVhbjtcbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRJbmlGaWxlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBpc0NvbmZpZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSBmaWxlbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHBhcnNlZENvbnRlbnRzPzogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH07XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IFNoYXJlZEluaUZpbGVPcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5pc0NvbmZpZyA9IG9wdGlvbnMuaXNDb25maWcgPT09IHRydWU7XG4gICAgdGhpcy5maWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUgfHwgdGhpcy5nZXREZWZhdWx0RmlsZXBhdGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRQcm9maWxlKHByb2ZpbGU6IHN0cmluZykge1xuICAgIGF3YWl0IHRoaXMuZW5zdXJlRmlsZUxvYWRlZCgpO1xuXG4gICAgY29uc3QgcHJvZmlsZUluZGV4ID0gcHJvZmlsZSAhPT0gKEFXUyBhcyBhbnkpLnV0aWwuZGVmYXVsdFByb2ZpbGUgJiYgdGhpcy5pc0NvbmZpZyA/XG4gICAgICAncHJvZmlsZSAnICsgcHJvZmlsZSA6IHByb2ZpbGU7XG5cbiAgICByZXR1cm4gdGhpcy5wYXJzZWRDb250ZW50cyFbcHJvZmlsZUluZGV4XTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdEZpbGVwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHBhdGguam9pbihcbiAgICAgIG9zLmhvbWVkaXIoKSxcbiAgICAgICcuYXdzJyxcbiAgICAgIHRoaXMuaXNDb25maWcgPyAnY29uZmlnJyA6ICdjcmVkZW50aWFscycsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZW5zdXJlRmlsZUxvYWRlZCgpIHtcbiAgICBpZiAodGhpcy5wYXJzZWRDb250ZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYXdhaXQgZnMucGF0aEV4aXN0cyh0aGlzLmZpbGVuYW1lKSkge1xuICAgICAgdGhpcy5wYXJzZWRDb250ZW50cyA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnRzOiBzdHJpbmcgPSAoYXdhaXQgZnMucmVhZEZpbGUodGhpcy5maWxlbmFtZSkpLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5wYXJzZWRDb250ZW50cyA9IChBV1MgYXMgYW55KS51dGlsLmluaS5wYXJzZShjb250ZW50cyk7XG4gIH1cbn1cbiJdfQ==