function hasClass(node, className) {
  const classList = node?.properties?.className;

  return Array.isArray(classList) && classList.includes(className);
}

function getNodeId(node) {
  return typeof node?.properties?.id === "string" ? node.properties.id : "";
}

function isFootnoteSection(node) {
  return node?.type === "element" && node.tagName === "section" && hasClass(node, "footnotes");
}

function isHeading(node, id, text) {
  if (node?.type !== "element" || !/^h[1-6]$/u.test(node.tagName)) {
    return false;
  }

  return getNodeId(node) === id || getText(node).trim().toLowerCase() === text.toLowerCase();
}

function getText(node) {
  if (!node) {
    return "";
  }

  if (node.type === "text") {
    return node.value || "";
  }

  if (!Array.isArray(node.children)) {
    return "";
  }

  return node.children.map(getText).join("");
}

function getFootnoteItems(section) {
  const list = section.children?.find((child) => child.type === "element" && child.tagName === "ol");

  if (!list || !Array.isArray(list.children)) {
    return [];
  }

  return list.children.filter((child) => child.type === "element" && child.tagName === "li");
}

function createReferenceSection(items, modifier) {
  return {
    type: "element",
    tagName: "section",
    properties: {
      className: ["reference-footnotes", `reference-footnotes--${modifier}`]
    },
    children: [
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: items
      }
    ]
  };
}

function insertAfterHeading(children, headingId, headingText, section) {
  const headingIndex = children.findIndex((child) => isHeading(child, headingId, headingText));

  if (headingIndex < 0) {
    return false;
  }

  children.splice(headingIndex + 1, 0, section);

  return true;
}

export default function rehypeFootnoteSections() {
  return (tree) => {
    if (!Array.isArray(tree.children)) {
      return;
    }

    const footnoteIndex = tree.children.findIndex(isFootnoteSection);

    if (footnoteIndex < 0) {
      return;
    }

    const items = getFootnoteItems(tree.children[footnoteIndex]);
    const koreanItems = items.filter((item) => !getNodeId(item).startsWith("user-content-fn-en-"));
    const englishItems = items.filter((item) => getNodeId(item).startsWith("user-content-fn-en-"));
    let movedAny = false;

    if (koreanItems.length > 0) {
      movedAny =
        insertAfterHeading(tree.children, "참고-링크", "참고 링크", createReferenceSection(koreanItems, "ko")) ||
        movedAny;
    }

    if (englishItems.length > 0) {
      movedAny =
        insertAfterHeading(tree.children, "references", "References", createReferenceSection(englishItems, "en")) ||
        movedAny;
    }

    if (movedAny) {
      tree.children.splice(tree.children.findIndex(isFootnoteSection), 1);
    }
  };
}
