export default function Tips({ character }) {
  return (
    <>
      <div
        className="stats__abilities-desc"
        dangerouslySetInnerHTML={{ __html: character.tips }}
      />
    </>
  );
}
