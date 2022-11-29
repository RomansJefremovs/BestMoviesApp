const navItems: any = [
  { title: "Home", url: "/" },
  { title: "New & Popular", url: "*" },
  { title: "Movies", url: "*" },
  { title: "TV Shows", url: "*" },
];
const signedInNavItems: any = [{ title: "My Favorites", url: "/favorites" }];

export function getNavItems() {
  return navItems;
}

export function getSignedInNavItems() {
  return signedInNavItems;
}
