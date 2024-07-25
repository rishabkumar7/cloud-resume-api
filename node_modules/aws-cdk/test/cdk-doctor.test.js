"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_1 = require("../lib/commands/doctor");
// eslint-disable-next-line no-console
console.log = jest.fn();
describe('`cdk doctor`', () => {
    test('exits with 0 when everything is OK', async () => {
        const argv = {};
        const result = await (0, doctor_1.realHandler)({ args: argv });
        expect(result).toBe(0);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRvY3Rvci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLWRvY3Rvci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXFEO0FBRXJELHNDQUFzQztBQUN0QyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUV4QixRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDcEQsTUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxvQkFBVyxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBUyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhbEhhbmRsZXIgfSBmcm9tICcuLi9saWIvY29tbWFuZHMvZG9jdG9yJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nID0gamVzdC5mbigpO1xuXG5kZXNjcmliZSgnYGNkayBkb2N0b3JgJywgKCkgPT4ge1xuICB0ZXN0KCdleGl0cyB3aXRoIDAgd2hlbiBldmVyeXRoaW5nIGlzIE9LJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFyZ3Y6IGFueSA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlYWxIYW5kbGVyKHsgYXJnczogYXJndiB9IGFzIGFueSk7XG4gICAgZXhwZWN0KHJlc3VsdCkudG9CZSgwKTtcbiAgfSk7XG59KTtcbiJdfQ==