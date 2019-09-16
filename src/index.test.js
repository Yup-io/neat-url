const neatURL = require("./index")

describe('neatURL', () => {  

	it("Remove utm_source from querystring", () => {
		expect(neatURL({
			url: "https://www.example.com/bens-tagging?utm_source=mysite.com&utm_medium=referral&utm_campaign=url+tracking+post#Echobox=1568564590",
			includeHash: true
		})).toBe("https://www.example.com/bens-tagging");
	});

	it("Remove Echobox hash variable", () => {
		expect(neatURL({
			url: "https://nationalpost.com/news/world/in-edward-snowdens-new-memoir-the-disclosures-this-time-are-personal#Echobox=1568564590",
			includeHash: true
		})).toBe("https://nationalpost.com/news/world/in-edward-snowdens-new-memoir-the-disclosures-this-time-are-personal");
	});

	it("Ignore hash key with no value", () => {
		expect(neatURL({
			url: "https://nationalpost.com/news/world/in-edward-snowdens-new-memoir-the-disclosures-this-time-are-personal#abcdefg",
			includeHash: true
		})).toBe("https://nationalpost.com/news/world/in-edward-snowdens-new-memoir-the-disclosures-this-time-are-personal#abcdefg");
	});

});

