export function toParam(query: string) {
  const q = query.replace(/^(\?|#)/, "");

  return q.split("&").reduce(
    (values, param) => {
      const [key, value] = param.split("=");
      return {
        ...values,
        [key]: decodeURIComponent(value),
      };
    },
    { app: "", component: "" }
  );
}
