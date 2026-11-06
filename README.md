# Artora - Online Art Gallery

A student-level React academic project following the component and page structure of the supplied KL E-Commerce reference project.

## Technologies
- React 18
- JavaScript
- CSS Grid and Flexbox
- React Router DOM
- Vite
- Browser localStorage for demo data

## Project structure

```text
online-art-gallery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── App.css
    ├── context/
    │   └── GalleryContext.jsx
    ├── components/
    │   ├── Header.jsx
    │   ├── Categories.jsx
    │   ├── Banner.jsx
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Signup.jsx
    │   ├── ArtworkCard.jsx
    │   ├── PageLayout.jsx
    │   ├── Offers.jsx
    │   ├── Services.jsx
    │   └── Footer.jsx
    └── pages/
        ├── admin/
        │   ├── AdminDashboard.jsx
        │   ├── ManageArtworks.jsx
        │   ├── ManageArtists.jsx
        │   ├── ManageAuctions.jsx
        │   ├── AllUsers.jsx
        │   └── ManageExhibitions.jsx
        └── user/
            ├── UserDashboard.jsx
            ├── Artworks.jsx
            ├── ArtworkDetails.jsx
            ├── Favourites.jsx
            ├── Cart.jsx
            ├── Auctions.jsx
            ├── Artists.jsx
            └── Reviews.jsx
```

## Run in VS Code
1. Extract the ZIP file.
2. Open the `online-art-gallery` folder in VS Code.
3. Open Terminal and choose **Command Prompt** if PowerShell blocks `npm.ps1`.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Demo login
- Admin: `admin@artora.com` / `admin123`
- User: `user@artora.com` / `user123`

New users can register from the Signup page. The Admin account is a fixed demo account.

## Academic project note
This is a frontend demonstration. Data is saved in browser localStorage. Login is not secure production authentication; checkout and auction bids are simulations. A production deployment requires a backend, database, secure authentication, image hosting and payment integration.
