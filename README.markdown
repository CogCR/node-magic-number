#### node-magic-number
Node.js module to determine a file's type from its magic number.

Use from JavaScript:

    var magic = require('magic-number');`
    magic.detectFile('file.zip'); // ==> 'application/zip'
    magic.detectFile('file.7z');  // ==> 'application/x-7z-compressed'

Use from [TypeScript](http://www.typescriptlang.org):

    /// <require path="typings/magic-number.d.ts" />
     
    import magic = require('magic-number');
    magic.detectFile('file.zip'); // ==> 'application/zip'
    magic.detectFile('file.7z');  // ==> 'application/x-7z-compressed'

Methods:

**magic.detectFile(file: string): string**

Parameter *file* is path string for the file to test.
Returns a MIME type for the tested file or 'unknown' if file type is not detected.
