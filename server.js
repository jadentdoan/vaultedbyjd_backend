const express = require('express');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3001;

app.set('json spaces', 2);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/vault', (_req, res) => {
  const cards = [
    {
      "id": "tyler-shough-rookie-patch-auto",
      "title": "Tyler Shough",
      "players": ["Tyler Shough"],
      "collection": "Saints Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2025 Phoenix Football",
      "details": "RPS Rookie Patch Autographs · Bronze Pandora",
      "serialization": "/199",
      "imageUrl": "/images/tylershough.jpg"
    },
    {
      "id": "drew-brees-milestone-marks",
      "title": "Drew Brees",
      "players": ["Drew Brees"],
      "collection": "Saints Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2022 Encased Football",
      "details": "Milestone Marks On-Card Autograph",
      "serialization": "2/5",
      "imageUrl": "/images/drewbrees.jpg"
    },
    {
      "id": "michael-thomas-explosive",
      "title": "Michael Thomas",
      "players": ["Michael Thomas"],
      "collection": "Saints Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2018 Donruss Optic Football",
      "details": "Explosive",
      "serialization": null,
      "imageUrl": "/images/michaelthomas.jpg"
    },
    {
      "id": "jamarr-chase-rookie-auto",
      "title": "Ja'Marr Chase",
      "players": ["Ja'Marr Chase"],
      "collection": "Collegiate Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2021 Immaculate Collection Collegiate Football",
      "details": "Rookie On-Card Autograph",
      "serialization": "13/99",
      "imageUrl": "/images/jamarrchase.jpg"
    },
    {
      "id": "lsu-team-dual-materials",
      "title": "LSU Team Dual",
      "players": ["Ja'Marr Chase", "Terrace Marshall Jr."],
      "collection": "Collegiate Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2021 National Treasures Collegiate Football",
      "details": "Team Dual Materials",
      "serialization": "46/99",
      "imageUrl": "/images/lsudualpatch.jpg"
    },
    {
      "id": "lsu-team-trio-materials",
      "title": "LSU Team Trio",
      "players": ["Ja'Marr Chase", "Terrace Marshall Jr.", "Justin Jefferson"],
      "collection": "Collegiate Collection",
      "sport": "Football",
      "company": "Panini",
      "set": "2021 National Treasures Collegiate Football",
      "details": "Team Trio Materials",
      "serialization": "24/99",
      "imageUrl": "/images/lsutriplepatch.jpg"
    },
    {
      "id": "johnny-juzang-chrome-prospect-auto",
      "title": "Johnny Juzang",
      "players": ["Johnny Juzang"],
      "collection": "Other Gold",
      "sport": "Basketball",
      "company": "Topps",
      "set": "2021–22 Bowman University Basketball",
      "details": "Chrome Prospect Autographs · Green Refractor",
      "serialization": "/99",
      "imageUrl": "/images/johnnyjuzang.jpg"
    },
    {
      "id": "dat-nguyen-orbital-signatures",
      "title": "Dat Nguyen",
      "players": ["Dat Nguyen"],
      "collection": "Other Gold",
      "sport": "Football",
      "company": "Panini",
      "set": "2024 Obsidian Football",
      "details": "Orbital Signatures",
      "serialization": null,
      "imageUrl": "/images/datnguyen.jpg"
    },
    {
      "id": "ilia-topuria-rated-rookie",
      "title": "Ilia Topuria",
      "players": ["Ilia Topuria"],
      "collection": "Other Gold",
      "sport": "UFC",
      "company": "Panini",
      "set": "2022 Donruss Optic UFC",
      "details": "Rated Rookie · Purple",
      "serialization": null,
      "imageUrl": "/images/iliatopuria.jpg"
    }
  ];

  res.set('Access-Control-Allow-Origin', '*');
  res.send(cards);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Vault API listening on port ${port}`);
  });
}

module.exports = app;
