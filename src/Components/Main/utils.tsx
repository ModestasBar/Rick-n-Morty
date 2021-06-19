export const searchByName = (characters, value) =>
  !!value.trim()
    ? characters.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase()),
      )
    : characters;
