/**
 * Backstage Pass — Google Apps Script web app entry point.
 *
 * Deploy:  Deploy ▸ New deployment ▸ Web app
 *   • Execute as:      Me
 *   • Who has access:  Anyone within Funding Circle   (keeps it behind Google sign-in)
 *
 * The whole course is front-end only; Apps Script just delivers the page.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Backstage Pass — Learn to read what AI builds')
    // Apps Script strips <meta viewport>, so set it here instead:
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Inserts another file's raw contents into a template.
 * Used by index.html as <?!= include('theme'); ?> etc.
 * getContent() returns the file verbatim — it does NOT run scriptlets,
 * so the backticks/${...} in content.html and app.html are left untouched.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}