export default function Lore({ character }) {
  return (
    <>
      <div className="stats__abilities-name">{character.loretitle}</div>
      <div
        className="stats__abilities-desc"
        dangerouslySetInnerHTML={{ __html: character.lore }}
      />
    </>
  );
}
