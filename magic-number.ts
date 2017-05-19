/*
	Magic number detection for Node.js
	Copyright 2015 Sam Saint-Pettersen

	Released under the MIT License.
*/

/// <reference path="typings/node.d.ts" />

import fs = require('fs');

function toChar(dec: number): string {
	return String.fromCharCode(dec);
}

class MagicNumber {

	private static mimes: string[];
	private static ids: string[];

	private static loadFileTypes(): void {
		if(fs.existsSync('file.types')) {
			MagicNumber.mimes = new Array<string>();
			MagicNumber.ids = new Array<string>();
			var data: any = fs.readFileSync('file.types');
			var lines: string[] = data.toString().split('\n');
			for(var i: number = 0; i < lines.length; i++) {
				var mi: string[] = lines[i].split(':');
				if(mi[0] != '') {
					MagicNumber.mimes.push(mi[0]);
					MagicNumber.ids.push(mi[1]);
				}
			}
		}
		else {
			console.log('Error in magicnumber module: file.types file missing.')
			process.exit(-1);
		}
	}

	public static detectType(data: any): string {
		MagicNumber.loadFileTypes();
		var type: string = 'unknown';
		for(var i: number = 0; i < MagicNumber.ids.length; i++) {
			var file_mn: string = '';
			var compare_mn: string = MagicNumber.ids[i];
			for(var x: number = 0; x < compare_mn.length; x++) {
				file_mn += toChar(data[x]);
			}
			if(file_mn == compare_mn) {
				type = MagicNumber.mimes[i];
				break;
			}
		}
		return type;
	}

	public static detectFile(file: string): string {
		var type: string = 'unknown';
		if(fs.existsSync(file)) {
			var data: any = fs.readFileSync(file);
			type = this.detectType(data);
 		}
		return type;
	}
}
export = MagicNumber;
