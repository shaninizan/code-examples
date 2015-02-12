Address Mapping
Project: Provide appropriate address fields for international customers and accommodate corresponding required fields

Interface development:
- I proposed that we move the country field ahead of the other address fields, so it was first.
- Utilize CSS and JSP for indicating required fields, and subsequent errors


What/How/When:
- Architected data object returned from Java
- Hand coded javascript object. This is the ajax callback.
- Defined display / hide behavior of each field for each specified country
- Displayed required fields based on Java object results
- Wrote front-end validations
- Applies to address and phone fields


Issues:
- This is minor. Historically, the Java developers did their piece and handed off the data to the front end developer. In this case, I built my code before a Java developer had been assigned. The Java developer did not accommodate my data architecture, and had to reformat his output after it had been delivered. Fortunately once that was done, it just worked right out of the gate. Huge win!


Notes: 
- What I've included here is the original AddressMap object and the handful of custom countries. It is from July 2010. Since that time, there have been extensions, and probably some changes as well, but the core is still the same.
- See it in action: https://www.delta.com/profile/enrolllanding.action
  * Change the country and watch the labels and required fields change.
  * My favorites are Japan and Hong Kong
- This code is used everywhere delta.com asks for an address, including every credit card transaction.