const navItems: any = [
  { title: "Home", url: "/" },
  { title: "Global", url: "global" },
];

const signedInNavItems: any = [{ title: "My Favorites", url: "/favorites" }, { title: "My Playlists", url: "playlists" }];

const discoverItems: any = [
  { title: "Top Rated", url: "toprated" },
  { title: "Top '10s", url: "10s" },
  { title: "Top '00s", url: "00s" },
  { title: "Top '90s", url: "90s" },
  { title: "Top '80s", url: "80s" },
  { title: "Top '70s", url: "70s" },
]

export function getNavItems() {
  return navItems;
}

export function getSignedInNavItems() {
  return signedInNavItems;
}

export function getDiscoverItems() {
  return discoverItems;
}