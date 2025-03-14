import parse from 'html-dom-parser';

// $ExpectType (Element | Text | Comment | ProcessingInstruction)[]
parse('<div>text</div>');

// $ExpectType (Element | Text | Comment | ProcessingInstruction)[]
parse('<div>text</div>', { xmlMode: true });

// $ExpectType (Element | Text | Comment | ProcessingInstruction)[]
parse('<div>text</div>', { withStartIndices: true });

// $ExpectType (Element | Text | Comment | ProcessingInstruction)[]
parse('<div>text</div>', { withEndIndices: true });

// $ExpectType (Element | Text | Comment | ProcessingInstruction)[]
parse('');
