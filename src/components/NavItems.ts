const navItems: any = [
  { title: "Home", url: "/" },
  { title: "Movies", url: "*" },
  { title: "TV Shows", url: "*" },
  { title: "Top Rated", url: "toprated" },
];
const signedInNavItems: any = [{ title: "My Favorites", url: "/favorites" }];

export function getNavItems() {
  return navItems;
}

export function getSignedInNavItems() {
  return signedInNavItems;
}
