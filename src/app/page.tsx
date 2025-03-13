export default function Home() {
  return (
    <div>
      <main>
        <div className={"columns-2"}>
          <p className={"text-base"}>안녕하세요!</p>
          <p className={"text-lg"}>안녕하세요!</p>
          <p className={"text-xl"}>안녕하세요!</p>
          <p className={"text-2xl"}>안녕하세요!</p>

          <p className={"text-base font-bold"}>안녕하세요!</p>
          <p className={"text-lg font-bold"}>안녕하세요!</p>
          <p className={"text-xl font-bold"}>안녕하세요!</p>
          <p className={"text-2xl font-bold"}>안녕하세요!</p>
        </div>

        <p className={"text-primary"}>프라이머리 색상은 무엇인가요?</p>
        <p className={"text-secondary"}>세컨더리 색상은 무엇인가요?</p>

        <code>console.log("foo bar");</code>
      </main>
      <footer></footer>
    </div>
  );
}
