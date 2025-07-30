function capitalize(text: string): string {
  if (!text) return "";

  const result = [
    text.split("")[0].toUpperCase(),
    ...text.split("").slice(1),
  ].join("") as string;

  return result;
}

function updateUrl(searchParams: string, page: string): void {
  const params = new URLSearchParams(searchParams);
  params.set("page", page);
  window.history.pushState(null, "", `?${params.toString()}`);
}

export { capitalize, updateUrl };
