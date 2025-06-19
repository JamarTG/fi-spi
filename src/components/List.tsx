import React from "react";

interface ListProps<T> {
  data: T[];
  renderFn: (a: T) => React.ReactNode;
}

const List = <T,>({ data, renderFn }: ListProps<T>) => {
  return <>{data.map(renderFn)}</>;
};

export default List;
