import "./App.css";

const tools = [
  {
    title: "Image Tool",
    icon: "🖼️",
    desc: "Resize and reduce image size in one flow",
    url: "https://rashidvp.github.io/image-resizer-compressor/",
  },
  {
    title: "Image Resizer",
    icon: "📐",
    desc: "Resize images using width and height",
    url: "https://rashidvp.github.io/image-resizer/",
  },
  {
    title: "Image Compressor",
    icon: "🗜️",
    desc: "Compress images to target file size",
    url: "https://rashidvp.github.io/image-compressor/",
  },
  {
    title: "WhatsApp to Any Number",
    icon: "💬",
    desc: "Send WhatsApp messages to any number",
    url: "https://rashidvp.github.io/msg-to-any/",
  },
  // {
  //   title: "PDF Compressor",
  //   icon: "📄",
  //   desc: "Compress PDF to target file size",
  //   url: "https://rashidvp.github.io/pdf-compressor/",
  // },
  {
    title: "Spin the Wheel",
    icon: "🎡",
    desc: "Random picker wheel for decisions",
    url: "https://rashidvp.github.io/spin-the-wheel/",
  },
  {
    title: "Plus Two Percentage Calculator",
    icon: "🧮",
    desc: "Calculate +2 exam percentage easily",
    url: "https://rashidvp.github.io/plus-two-percentage-calculator/",
  },
];

export default function App() {
  return (
    <main className="page">
      <div className="home-wrapper">
        <h1 className="title">🧰 Utility Tools</h1><br></br>
        {/* <p className="subtitle">
          Simple, fast & free tools — no backend required
        </p> */}

        <div className="cards">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              className="card"
            >
              <span className="icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}