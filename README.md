# Moment 1.1 - Skapa webbplats med .NET och Razor Pages

Min lösning på detta moment är en webbplats med efterfrågad responsiv layout med flexbox och information i headern i form av dynamisk data skriven i Razor-syntax för datum. Det finns även dynamisk data skriven i Razor-syntax på undersidan Razor som visar dagens datum/tid med hjälp av DateTime-objekt. Det finns även en rad om det är/inte är fredag utifrån en jämförelse av hämtat enum och angivet värde för fredag. Slutligen finns en string-array med kurser som itereras i en foreach-loop och skrivs ut till en lista.

För valfri JS-funktionalitet i momentet valde jag att möjliggöra växling till mörkt tema. Knappen för att byta finns i footern och inställningen lagras i localStorage för en ihållande och smidig upplevelse. 