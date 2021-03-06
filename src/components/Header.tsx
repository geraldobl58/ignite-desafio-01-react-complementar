interface HeaderTitle {
  selectedGenre: {
    title: string;
  }
}

export function Header({ selectedGenre }: HeaderTitle) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}