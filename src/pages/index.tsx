import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="docs-header">Template Website Research & Design Plan</h1>
      <p className="mt-4">
        Before creating the template page for AntiCopyPasta, I thoroughly
        reviewed several template pages available online. These included
        JetBrains plugins and non-JetBrains tools to understand how template
        pages are generally structured. The goal was to identify common patterns
        and effective designs to implement in my template. Here are the main
        websites I found to be good references:
      </p>
      <ul className="list-disc list-inside">
        <li>
          SolarLint -{" "}
          <Link href="https://www.sonarsource.com/products/sonarlint/">
            <span className="text-blue-600">
              https://www.sonarsource.com/products/sonarlint/
            </span>
          </Link>
        </li>
        <li>
          ReSharper -{""}
          <Link href="https://www.jetbrains.com/resharper/">
            <span className="text-blue-600">
              https://www.jetbrains.com/resharper/
            </span>
          </Link>
        </li>
        <li>
          Qodana -{" "}
          <Link href="https://www.jetbrains.com/qodana/">
            <span className="text-blue-600">
              https://www.jetbrains.com/qodana/
            </span>
          </Link>
        </li>
        <li>
          PMD -{" "}
          <Link href="https://pmd.github.io/">
            <span className="text-blue-600">https://pmd.github.io/</span>
          </Link>
        </li>
        <li>
          ESLint -{" "}
          <Link href="https://eslint.org/">
            <span className="text-blue-600">https://eslint.org/</span>
          </Link>
        </li>
        <li>
          Swagger -{" "}
          <Link href="https://swagger.io/">
            <span className="text-blue-600">https://swagger.io/</span>
          </Link>
        </li>
        <li>
          Docker -{" "}
          <Link href="https://www.docker.com/">
            <span className="text-blue-600">https://www.docker.com/</span>
          </Link>
        </li>
        <li>
          Prettier -{" "}
          <Link href="https://prettier.io/">
            <span className="text-blue-600">https://prettier.io/</span>
          </Link>
        </li>
      </ul>
      <p className="mt-4">
        These template pages typically consist of a "Landing Page," which is the
        first impression of the tool or plugin, often highlighting its main
        features and providing a quick summary of its purpose. This section is
        followed by other essential parts such as "Features Overview,"
        "Documentation," "Community Support," "Pricing," and a "Get Started"
        section. For example, Docker’s template page clearly lays out the main
        features, showcasing use cases and providing an easy link to its
        documentation.
      </p>
      <p className="mt-4">
        In addition, template websites for tools like Swagger emphasize API
        documentation right on the landing page, making it easy for developers
        to access and understand how to implement the tool. This approach
        highlights the need for clarity and accessibility when creating a
        template page, ensuring users can quickly find the information they
        need. AntiCopyPasta’s template page will similarly focus on making
        documentation and usage instructions easy to access.
      </p>
      <p className="mt-4">
        Moreover, plugins like ReSharper and ESLint typically include sections
        for FAQs, setup guides, and troubleshooting tips. Since these plugins
        often run in the background and integrate deeply with other software,
        providing a simple setup process and offering clear, organized support
        documentation is crucial for user experience.
      </p>
      <p className="mt-4">
        A well-designed landing page for AntiCopyPasta should include the
        following key sections:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Introduction and Overview:</strong> This section should
          briefly explain what AntiCopyPasta does, similar to how SolarLint and
          PMD provide concise introductions. The aim is to give users a quick
          understanding of the tool’s value proposition.
        </li>
        <li>
          <strong>Features:</strong> Highlighting key features such as code
          duplication detection, Extract Method suggestions, and classification
          model accuracy. This can be structured similarly to Qodana’s features
          section, which uses a clear and visual layout.
        </li>
        <li>
          <strong>Getting Started:</strong> A quick guide to help new users set
          up the plugin, including IDE integration instructions and links to
          GitHub. This part will be inspired by ReSharper’s detailed setup
          documentation.
        </li>
        <li>
          <strong>Documentation:</strong> A section that contains in-depth
          resources, FAQs, and troubleshooting guides. Given that AntiCopyPasta
          runs as an IntelliJ IDEA plugin, documentation will cover usage tips
          and examples, similar to how ESLint structures its documentation.
        </li>
        <li>
          <strong>Pricing:</strong> If applicable, this section should outline
          the cost structure and highlight any premium features, taking
          inspiration from Docker’s transparent and detailed pricing model.
        </li>
      </ul>
      <p className="mt-4">
        In addition to these sections, template websites require excellent
        Search Engine Optimization (SEO) to increase visibility, especially for
        IDE-bound plugins. This involves using semantic HTML tags, optimizing
        assets, and writing clear meta descriptions.
      </p>
      <h1 className="docs-header">Template Page Development Draft</h1>
      <p className="mt-4">
        Since I currently have limited information about AntiCopyPasta, the
        template website remains a draft focusing on design and layout. I
        referenced the websites above to create a visually appealing and
        intuitive design. While I am not a professional designer, I aimed to
        balance clarity and aesthetics by integrating familiar design elements
        from successful plugin websites.
      </p>
      <p className="mt-4">
        The next steps include refining the design based on further research and
        adding specific content such as feature descriptions, setup
        instructions, and links to GitHub. Once I have more details about the
        project, I will enhance the template with more engaging elements like
        user testimonials, interactive demos, and animated showcases of
        AntiCopyPasta’s capabilities.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/draft">
            <span className="text-blue-500">Template Page Draft 1 </span>
          </Link>
          - The design takes inspiration from the structure and visual elements
          of JetBrains plugin template websites, aiming for a clean and
          professional look.
        </li>
      </ul>
    </div>
  );
}
