const fs = require("fs");

function generateXml ({ urls, hostname }) {
  const xmlStart = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">";
  const xmlEnd = "</urlset>";

  urls.reduce((acc, curr) => (`
    ${acc}
    <url>
      <loc>${hostname}${curr.url}</loc>
      ${curr.lastmod ? `<lastmod>${curr.lastmod}</lastmod>` : ''}
      <changefreq>${curr.changefreq}</changefreq>
      <priority>${curr.priority}</priority>
    </url>
  `), "")
}

function createSitemap({ hostname, urls }) {
  const xml = generateXml({ urls, hostname })
  fs.writeFile('./static/sitemap.xml', xml, () => console.log('Sitemap generated'))
}

function formatDate(date) {
  const d = new Date(date);
  const month = '' + (d.getMonth() + 1);
  const day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

module.exports = {
  createSitemap,
  formatDate
}