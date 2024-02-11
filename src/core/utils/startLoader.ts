const CONTAINER = 'start-loader-container';

export const showStartLoader = () => {
  const loader = document.getElementById(CONTAINER);

  if (loader) {
    loader.style.display = 'block';
  }
};

export const hideStartLoader = ({ isAuthenticated }: { isAuthenticated?: boolean }) => {
  const loader = document.getElementById(CONTAINER);

  if (loader && isAuthenticated !== false) {
    loader.style.display = 'none';
  }
};
