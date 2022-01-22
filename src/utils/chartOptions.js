export const options = {
    responsive: true,
   
    scales: {
      x: {
        grid: {
          borderColor: "rgba(119, 249, 253, 0.8)",
          opacity: 0.3,
        },
      },
      y: {
        grid: {
          color: "#02203b",
          borderColor: "rgba(119, 249, 253, 0.8)",
          opacity: 0.3,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: 'MOVIE RATINGS',
      },
    },
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  export const optionsMobile = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          borderColor: "rgba(119, 249, 253, 0.8)",
          opacity: 0.3,
        },
      },
      y: {
        grid: {
          color: "#02203b",
          borderColor: "rgba(119, 249, 253, 0.8)",
          opacity: 0.3,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Movie ratings",
      },
    },
    
  };