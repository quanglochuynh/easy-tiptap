export function formatHTMLString(htmlString: string) {
  const formattedHTMLString = htmlString
    .replace(/<p><br><\/p>/g, "<br>")
    .replace(/<br>/g, "<br>\n")
    .replace(/<p>/g, "<p>\n")
    .replace(/<\/p>/g, "\n</p>\n")
    .replace(/<ul>/g, "<ul>\n")
    .replace(/<\/ul>/g, "\n</ul>\n")
    .replace(/<li>/g, "<li>\n")
    .replace(/<\/li>/g, "\n</li>\n")
    .replace(/<ol>/g, "<ol>\n")
    .replace(/<\/ol>/g, "\n</ol>\n")
    .replace(/<h1>/g, "<h1>\n")
    .replace(/<\/h1>/g, "\n</h1>\n")
    .replace(/<h2>/g, "<h2>\n")
    .replace(/<\/h2>/g, "\n</h2>\n")
    .replace(/<h3>/g, "<h3>\n")
    .replace(/<\/h3>/g, "\n</h3>\n")
    .replace(/<h4>/g, "<h4>\n")
    .replace(/<\/h4>/g, "\n</h4>\n")
    .replace(/<h5>/g, "<h5>\n")
    .replace(/<\/h5>/g, "\n</h5>\n")
    .replace(/<h6>/g, "<h6>\n")
    .replace(/<\/h6>/g, "\n</h6>\n")
    .replace(/<blockquote>/g, "<blockquote>\n")
    .replace(/<\/blockquote>/g, "\n</blockquote>\n")
    .replace(/<pre>/g, "<pre>\n")
    .replace(/<\/pre>/g, "\n</pre>\n")
    .replace(/<code>/g, "<code>\n")
    .replace(/<\/code>/g, "\n</code>\n")
    .replace(/<a/g, "\n<a")
    .replace(/<\/a>/g, "</a>\n")
    .replace(/<img/g, "\n<img")
    .replace(/<div/g, "\n<div")
    .replace(/class=""/g, "");

  return addHTMLIndent(formattedHTMLString);
}

function addHTMLIndent(htmlString: string) {
  let formattedHtml = "";
  let indentLevel = 0;
  const indentSpaces = 2;

  const tagsToIndent = [
    "<html",
    "<head",
    "<body",
    "<div",
    "<span",
    "<p",
    "<a",
    "<ul",
    "<ol",
    "<li",
    "<h1",
    "<h2",
    "<h3",
    "<h4",
    "<h5",
    "<h6",
  ];

  const tagsToUnindent = [
    "</html",
    "</head",
    "</body",
    "</div",
    "</span",
    "</p",
    "</a",
    "</ul",
    "</ol",
    "</li",
    "</h1",
    "</h2",
    "</h3",
    "</h4",
    "</h5",
    "</h6",
  ];

  const tagsToIgnore = ["<br", "<hr", "<img"];

  const htmlLines = htmlString.split("\n");

  htmlLines.forEach((line) => {
    const trimmedLine = line.trim();
    const firstTwoChars = trimmedLine.substring(0, 2);
    const firstThreeChars = trimmedLine.substring(0, 3);
    const firstFourChars = trimmedLine.substring(0, 4);
    const firstFiveChars = trimmedLine.substring(0, 5);
    const firstSixChars = trimmedLine.substring(0, 6);

    if (tagsToIgnore.includes(firstThreeChars)) {
      formattedHtml += `${line}\n`;
    } else if (
      tagsToIndent.includes(firstTwoChars) ||
      tagsToIndent.includes(firstThreeChars) ||
      tagsToIndent.includes(firstFourChars) ||
      tagsToIndent.includes(firstFiveChars) ||
      tagsToIndent.includes(firstSixChars)
    ) {
      formattedHtml += `${" ".repeat(indentLevel * indentSpaces)}${line}\n`;
      indentLevel += 1;
    } else if (
      tagsToUnindent.includes(firstTwoChars) ||
      tagsToUnindent.includes(firstThreeChars) ||
      tagsToUnindent.includes(firstFourChars) ||
      tagsToUnindent.includes(firstFiveChars) ||
      tagsToUnindent.includes(firstSixChars)
    ) {
      indentLevel -= 1;
      formattedHtml += `${" ".repeat(indentLevel * indentSpaces)}${line}\n`;
    } else {
      formattedHtml += `${" ".repeat(indentLevel * indentSpaces)}${line}\n`;
    }
  });

  return formattedHtml;
}
