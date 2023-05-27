function getWalks(walks) {
  return walks.map(walk => {
    const { id, name, distance, unit } = walk;
    return { id, name, distance, unit };
  });
}

export default getWalks;
