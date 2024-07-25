"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RWLock = void 0;
const fs_1 = require("fs");
const path = require("path");
/**
 * A single-writer/multi-reader lock on a directory
 *
 * It uses marker files with PIDs in them as a locking marker; the PIDs will be
 * checked for liveness, so that if the process exits without cleaning up the
 * files the lock is implicitly released.
 *
 * This class is not 100% race safe, but in practice it should be a lot
 * better than the 0 protection we have today.
 */
class RWLock {
    constructor(directory) {
        this.directory = directory;
        this.readCounter = 0;
        this.pidString = `${process.pid}`;
        this.writerFile = path.join(this.directory, 'synth.lock');
    }
    /**
     * Acquire a writer lock.
     *
     * No other readers or writers must exist for the given directory.
     */
    async acquireWrite() {
        await this.assertNoOtherWriters();
        const readers = await this.currentReaders();
        if (readers.length > 0) {
            throw new Error(`Other CLIs (PID=${readers}) are currently reading from ${this.directory}. Invoke the CLI in sequence, or use '--output' to synth into different directories.`);
        }
        await writeFileAtomic(this.writerFile, this.pidString);
        return {
            release: async () => {
                await deleteFile(this.writerFile);
            },
            convertToReaderLock: async () => {
                // Acquire the read lock before releasing the write lock. Slightly less
                // chance of racing!
                const ret = await this.doAcquireRead();
                await deleteFile(this.writerFile);
                return ret;
            },
        };
    }
    /**
     * Acquire a read lock
     *
     * Will fail if there are any writers.
     */
    async acquireRead() {
        await this.assertNoOtherWriters();
        return this.doAcquireRead();
    }
    /**
     * Obtains the name fo a (new) `readerFile` to use. This includes a counter so
     * that if multiple threads of the same PID attempt to concurrently acquire
     * the same lock, they're guaranteed to use a different reader file name (only
     * one thread will ever execute JS code at once, guaranteeing the readCounter
     * is incremented "atomically" from the point of view of this PID.).
     */
    readerFile() {
        return path.join(this.directory, `read.${this.pidString}.${++this.readCounter}.lock`);
    }
    /**
     * Do the actual acquiring of a read lock.
     */
    async doAcquireRead() {
        const readerFile = this.readerFile();
        await writeFileAtomic(readerFile, this.pidString);
        return {
            release: async () => {
                await deleteFile(readerFile);
            },
        };
    }
    async assertNoOtherWriters() {
        const writer = await this.currentWriter();
        if (writer) {
            throw new Error(`Another CLI (PID=${writer}) is currently synthing to ${this.directory}. Invoke the CLI in sequence, or use '--output' to synth into different directories.`);
        }
    }
    /**
     * Check the current writer (if any)
     */
    async currentWriter() {
        const contents = await readFileIfExists(this.writerFile);
        if (!contents) {
            return undefined;
        }
        const pid = parseInt(contents, 10);
        if (!processExists(pid)) {
            // Do cleanup of a stray file now
            await deleteFile(this.writerFile);
            return undefined;
        }
        return pid;
    }
    /**
     * Check the current readers (if any)
     */
    async currentReaders() {
        const re = /^read\.([^.]+)\.[^.]+\.lock$/;
        const ret = new Array();
        let children;
        try {
            children = await fs_1.promises.readdir(this.directory, { encoding: 'utf-8' });
        }
        catch (e) {
            // Can't be locked if the directory doesn't exist
            if (e.code === 'ENOENT') {
                return [];
            }
            throw e;
        }
        for (const fname of children) {
            const m = fname.match(re);
            if (m) {
                const pid = parseInt(m[1], 10);
                if (processExists(pid)) {
                    ret.push(pid);
                }
                else {
                    // Do cleanup of a stray file now
                    await deleteFile(path.join(this.directory, fname));
                }
            }
        }
        return ret;
    }
}
exports.RWLock = RWLock;
async function readFileIfExists(filename) {
    try {
        return await fs_1.promises.readFile(filename, { encoding: 'utf-8' });
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            return undefined;
        }
        throw e;
    }
}
let tmpCounter = 0;
async function writeFileAtomic(filename, contents) {
    await fs_1.promises.mkdir(path.dirname(filename), { recursive: true });
    const tmpFile = `${filename}.${process.pid}_${++tmpCounter}`;
    await fs_1.promises.writeFile(tmpFile, contents, { encoding: 'utf-8' });
    await fs_1.promises.rename(tmpFile, filename);
}
async function deleteFile(filename) {
    try {
        await fs_1.promises.unlink(filename);
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            return;
        }
        throw e;
    }
}
function processExists(pid) {
    try {
        process.kill(pid, 0);
        return true;
    }
    catch (e) {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicndsb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicndsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUFvQztBQUNwQyw2QkFBNkI7QUFFN0I7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxNQUFNO0lBS2pCLFlBQTRCLFNBQWlCO1FBQWpCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFGckMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFHdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxZQUFZO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLE9BQU8sZ0NBQWdDLElBQUksQ0FBQyxTQUFTLHNGQUFzRixDQUFDLENBQUM7UUFDbEwsQ0FBQztRQUVELE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZELE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLHVFQUF1RTtnQkFDdkUsb0JBQW9CO2dCQUNwQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLEVB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LENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxLQUFLLFVBQVUsVUFBVSxDQUFDLFFBQWdCO0lBQ3hDLElBQUksQ0FBQztRQUNILE1BQU0sYUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQUMsT0FBTyxDQUFNLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDeEIsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBVztJQUNoQyxJQUFJLENBQUM7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuLyoqXG4gKiBBIHNpbmdsZS13cml0ZXIvbXVsdGktcmVhZGVyIGxvY2sgb24gYSBkaXJlY3RvcnlcbiAqXG4gKiBJdCB1c2VzIG1hcmtlciBmaWxlcyB3aXRoIFBJRHMgaW4gdGhlbSBhcyBhIGxvY2tpbmcgbWFya2VyOyB0aGUgUElEcyB3aWxsIGJlXG4gKiBjaGVja2VkIGZvciBsaXZlbmVzcywgc28gdGhhdCBpZiB0aGUgcHJvY2VzcyBleGl0cyB3aXRob3V0IGNsZWFuaW5nIHVwIHRoZVxuICogZmlsZXMgdGhlIGxvY2sgaXMgaW1wbGljaXRseSByZWxlYXNlZC5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIG5vdCAxMDAlIHJhY2Ugc2FmZSwgYnV0IGluIHByYWN0aWNlIGl0IHNob3VsZCBiZSBhIGxvdFxuICogYmV0dGVyIHRoYW4gdGhlIDAgcHJvdGVjdGlvbiB3ZSBoYXZlIHRvZGF5LlxuICovXG5leHBvcnQgY2xhc3MgUldMb2NrIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwaWRTdHJpbmc6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSB3cml0ZXJGaWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZENvdW50ZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBkaXJlY3Rvcnk6IHN0cmluZykge1xuICAgIHRoaXMucGlkU3RyaW5nID0gYCR7cHJvY2Vzcy5waWR9YDtcblxuICAgIHRoaXMud3JpdGVyRmlsZSA9IHBhdGguam9pbih0aGlzLmRpcmVjdG9yeSwgJ3N5bnRoLmxvY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3F1aXJlIGEgd3JpdGVyIGxvY2suXG4gICAqXG4gICAqIE5vIG90aGVyIHJlYWRlcnMgb3Igd3JpdGVycyBtdXN0IGV4aXN0IGZvciB0aGUgZ2l2ZW4gZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGFjcXVpcmVXcml0ZSgpOiBQcm9taXNlPElXcml0ZXJMb2NrPiB7XG4gICAgYXdhaXQgdGhpcy5hc3NlcnROb090aGVyV3JpdGVycygpO1xuXG4gICAgY29uc3QgcmVhZGVycyA9IGF3YWl0IHRoaXMuY3VycmVudFJlYWRlcnMoKTtcbiAgICBpZiAocmVhZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE90aGVyIENMSXMgKFBJRD0ke3JlYWRlcnN9KSBhcmUgY3VycmVudGx5IHJlYWRpbmcgZnJvbSAke3RoaXMuZGlyZWN0b3J5fS4gSW52b2tlIHRoZSBDTEkgaW4gc2VxdWVuY2UsIG9yIHVzZSAnLS1vdXRwdXQnIHRvIHN5bnRoIGludG8gZGlmZmVyZW50IGRpcmVjdG9yaWVzLmApO1xuICAgIH1cblxuICAgIGF3YWl0IHdyaXRlRmlsZUF0b21pYyh0aGlzLndyaXRlckZpbGUsIHRoaXMucGlkU3RyaW5nKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWxlYXNlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUZpbGUodGhpcy53cml0ZXJGaWxlKTtcbiAgICAgIH0sXG4gICAgICBjb252ZXJ0VG9SZWFkZXJMb2NrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIEFjcXVpcmUgdGhlIHJlYWQgbG9jayBiZWZvcmUgcmVsZWFzaW5nIHRoZSB3cml0ZSBsb2NrLiBTbGlnaHRseSBsZXNzXG4gICAgICAgIC8vIGNoYW5jZSBvZiByYWNpbmchXG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuZG9BY3F1aXJlUmVhZCgpO1xuICAgICAgICBhd2FpdCBkZWxldGVGaWxlKHRoaXMud3JpdGVyRmlsZSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWNxdWlyZSBhIHJlYWQgbG9ja1xuICAgKlxuICAgKiBXaWxsIGZhaWwgaWYgdGhlcmUgYXJlIGFueSB3cml0ZXJzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGFjcXVpcmVSZWFkKCk6IFByb21pc2U8SUxvY2s+IHtcbiAgICBhd2FpdCB0aGlzLmFzc2VydE5vT3RoZXJXcml0ZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuZG9BY3F1aXJlUmVhZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9idGFpbnMgdGhlIG5hbWUgZm8gYSAobmV3KSBgcmVhZGVyRmlsZWAgdG8gdXNlLiBUaGlzIGluY2x1ZGVzIGEgY291bnRlciBzb1xuICAgKiB0aGF0IGlmIG11bHRpcGxlIHRocmVhZHMgb2YgdGhlIHNhbWUgUElEIGF0dGVtcHQgdG8gY29uY3VycmVudGx5IGFjcXVpcmVcbiAgICogdGhlIHNhbWUgbG9jaywgdGhleSdyZSBndWFyYW50ZWVkIHRvIHVzZSBhIGRpZmZlcmVudCByZWFkZXIgZmlsZSBuYW1lIChvbmx5XG4gICAqIG9uZSB0aHJlYWQgd2lsbCBldmVyIGV4ZWN1dGUgSlMgY29kZSBhdCBvbmNlLCBndWFyYW50ZWVpbmcgdGhlIHJlYWRDb3VudGVyXG4gICAqIGlzIGluY3JlbWVudGVkIFwiYXRvbWljYWxseVwiIGZyb20gdGhlIHBvaW50IG9mIHZpZXcgb2YgdGhpcyBQSUQuKS5cbiAgICovXG4gIHByaXZhdGUgcmVhZGVyRmlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBwYXRoLmpvaW4odGhpcy5kaXJlY3RvcnksIGByZWFkLiR7dGhpcy5waWRTdHJpbmd9LiR7Kyt0aGlzLnJlYWRDb3VudGVyfS5sb2NrYCk7XG4gIH1cblxuICAvKipcbiAgICogRG8gdGhlIGFjdHVhbCBhY3F1aXJpbmcgb2YgYSByZWFkIGxvY2suXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGRvQWNxdWlyZVJlYWQoKTogUHJvbWlzZTxJTG9jaz4ge1xuICAgIGNvbnN0IHJlYWRlckZpbGUgPSB0aGlzLnJlYWRlckZpbGUoKTtcbiAgICBhd2FpdCB3cml0ZUZpbGVBdG9taWMocmVhZGVyRmlsZSwgdGhpcy5waWRTdHJpbmcpO1xuICAgIHJldHVybiB7XG4gICAgICByZWxlYXNlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUZpbGUocmVhZGVyRmlsZSk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGFzc2VydE5vT3RoZXJXcml0ZXJzKCkge1xuICAgIGNvbnN0IHdyaXRlciA9IGF3YWl0IHRoaXMuY3VycmVudFdyaXRlcigpO1xuICAgIGlmICh3cml0ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW5vdGhlciBDTEkgKFBJRD0ke3dyaXRlcn0pIGlzIGN1cnJlbnRseSBzeW50aGluZyB0byAke3RoaXMuZGlyZWN0b3J5fS4gSW52b2tlIHRoZSBDTEkgaW4gc2VxdWVuY2UsIG9yIHVzZSAnLS1vdXRwdXQnIHRvIHN5bnRoIGludG8gZGlmZmVyZW50IGRpcmVjdG9yaWVzLmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY3VycmVudCB3cml0ZXIgKGlmIGFueSlcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgY3VycmVudFdyaXRlcigpOiBQcm9taXNlPG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgcmVhZEZpbGVJZkV4aXN0cyh0aGlzLndyaXRlckZpbGUpO1xuICAgIGlmICghY29udGVudHMpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG4gICAgY29uc3QgcGlkID0gcGFyc2VJbnQoY29udGVudHMsIDEwKTtcbiAgICBpZiAoIXByb2Nlc3NFeGlzdHMocGlkKSkge1xuICAgICAgLy8gRG8gY2xlYW51cCBvZiBhIHN0cmF5IGZpbGUgbm93XG4gICAgICBhd2FpdCBkZWxldGVGaWxlKHRoaXMud3JpdGVyRmlsZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBwaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGN1cnJlbnQgcmVhZGVycyAoaWYgYW55KVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBjdXJyZW50UmVhZGVycygpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgY29uc3QgcmUgPSAvXnJlYWRcXC4oW14uXSspXFwuW14uXStcXC5sb2NrJC87XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcblxuICAgIGxldCBjaGlsZHJlbjtcbiAgICB0cnkge1xuICAgICAgY2hpbGRyZW4gPSBhd2FpdCBmcy5yZWFkZGlyKHRoaXMuZGlyZWN0b3J5LCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgLy8gQ2FuJ3QgYmUgbG9ja2VkIGlmIHRoZSBkaXJlY3RvcnkgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VOT0VOVCcpIHsgcmV0dXJuIFtdOyB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgZm5hbWUgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IG0gPSBmbmFtZS5tYXRjaChyZSk7XG4gICAgICBpZiAobSkge1xuICAgICAgICBjb25zdCBwaWQgPSBwYXJzZUludChtWzFdLCAxMCk7XG4gICAgICAgIGlmIChwcm9jZXNzRXhpc3RzKHBpZCkpIHtcbiAgICAgICAgICByZXQucHVzaChwaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERvIGNsZWFudXAgb2YgYSBzdHJheSBmaWxlIG5vd1xuICAgICAgICAgIGF3YWl0IGRlbGV0ZUZpbGUocGF0aC5qb2luKHRoaXMuZGlyZWN0b3J5LCBmbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBhY3F1aXJlZCBsb2NrXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2sge1xuICByZWxlYXNlKCk6IFByb21pc2U8dm9pZD47XG59XG5cbi8qKlxuICogQW4gYWNxdWlyZWQgd3JpdGVyIGxvY2tcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVyTG9jayBleHRlbmRzIElMb2NrIHtcbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHdyaXRlciBsb2NrIHRvIGEgcmVhZGVyIGxvY2tcbiAgICovXG4gIGNvbnZlcnRUb1JlYWRlckxvY2soKTogUHJvbWlzZTxJTG9jaz47XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlSWZFeGlzdHMoZmlsZW5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVuYW1lLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICBpZiAoZS5jb2RlID09PSAnRU5PRU5UJykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5sZXQgdG1wQ291bnRlciA9IDA7XG5hc3luYyBmdW5jdGlvbiB3cml0ZUZpbGVBdG9taWMoZmlsZW5hbWU6IHN0cmluZywgY29udGVudHM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmcy5ta2RpcihwYXRoLmRpcm5hbWUoZmlsZW5hbWUpLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgY29uc3QgdG1wRmlsZSA9IGAke2ZpbGVuYW1lfS4ke3Byb2Nlc3MucGlkfV8keysrdG1wQ291bnRlcn1gO1xuICBhd2FpdCBmcy53cml0ZUZpbGUodG1wRmlsZSwgY29udGVudHMsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gIGF3YWl0IGZzLnJlbmFtZSh0bXBGaWxlLCBmaWxlbmFtZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZpbGUoZmlsZW5hbWU6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGZzLnVubGluayhmaWxlbmFtZSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0V4aXN0cyhwaWQ6IG51bWJlcikge1xuICB0cnkge1xuICAgIHByb2Nlc3Mua2lsbChwaWQsIDApO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=