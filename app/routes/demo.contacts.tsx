import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, Outlet, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect } from "react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  return json({ contacts, q });
};

export default function Contact() {
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [query, setQuery] = useState(q || "");
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  useEffect(() => {
    setQuery(q || "");
  }, [q]);

  const isFirstSearch = q === null;
  useEffect(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);

  return (
    <html lang="en">
      {/* existing elements */}
      <body>
        <div id="sidebar">
          {/* existing elements */}
          <div>
            <Form
              id="search-form"
              onChange={(event) => {
                submit(event.currentTarget, {
                  replace: !isFirstSearch,
                });
              }}
            >
              <input
                aria-label="Search contacts"
                className={searching ? "loading" : ""}
                defaultValue={q || ""}
                id="q"
                name="q"
                onChange={(event) => setQuery(event.currentTarget.value)}
                placeholder="Search"
                type="search"
                value={query}
              />
              <div aria-hidden hidden={!searching} id="search-spinner" />
            </Form>
            <div
              className={
                navigation.state === "loading" && !searching ? "loading" : ""
              }
              id="detail"
            >
              <Outlet />
            </div>
          </div>
          {/* existing elements */}
        </div>
        {/* existing elements */}
      </body>
    </html>
  );
}
