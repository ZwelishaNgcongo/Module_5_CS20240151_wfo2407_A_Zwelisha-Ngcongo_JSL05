// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Bad Habits", artist: "Ed Sheeran", genre: "Pop" },
    { title: "Paris", artist: "Lwah Ndlunkulu", genre: "Maskandi" },
    { title: "Never Enough", artist: "Loren Allred", genre: "Pop" },
    { title: "Nuh Fear Dem", artist: "Capleton", genre: "Reggae" },
     
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"R&B",
    "Rocket":"Rock",
    "Groot":"Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Get the playlists container
    let playlistsContainer = document.getElementById("playlists");

     /* Iterate over the guardians and generate playlists */
    Object.keys(guardians).map(guardian => {
        /*  Get the preferred genre of the current guardian */
        let preferredGenre = guardians[guardian];

        /*  Filter the songs that match the guardian's preferred genre */
        let playlist = songs.filter(song => song.genre === preferredGenre);

         /* Create a new div for the guardian's playlist */
        let guardianPlaylist = document.createElement("div");
        guardianPlaylist.innerHTML = `<h2>${guardian}'s Playlist</h2>`;

        /*  Create a list of songs */
        let ul = document.createElement("ul");
        playlist.map(song => {
            let li = document.createElement("li");
            li.textContent = `${song.title} by ${song.artist} (${song.genre})`;
            ul.appendChild(li);
        });

        /*  Append the list to the guardian's playlist div */
        guardianPlaylist.appendChild(ul);

        // Append the guardian's playlist to the playlists container
        playlistsContainer.appendChild(guardianPlaylist);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



