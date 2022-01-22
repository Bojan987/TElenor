export const options = {
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
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Movie ratings",
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
    responsive: false,
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
    responsive: true,
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