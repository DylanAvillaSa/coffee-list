export const getDataCoffe = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );
  const data = await response.json();

  return data;
};
