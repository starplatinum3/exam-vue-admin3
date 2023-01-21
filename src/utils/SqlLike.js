
//分组
export const groupBy = (list, fn) => {
  const groups = {};
  list.forEach(function (o) {
      const group = JSON.stringify(fn(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
  });
  // return Object.keys(groups).map(function (group) {
  //     return groups[group];
  // });
  return groups;
}

