import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 redirects from old .html URLs to new clean URLs
      // Captures backlink juice from the domain's 14-year history (2011-2025)
      { source: '/9-exercise-myths-to-avoid.html', destination: '/9-exercise-myths-to-avoid', permanent: true },
      { source: '/exercise-at-home-or-the-gym.html', destination: '/exercise-at-home-or-the-gym', permanent: true },
      { source: '/exercise-and-your-complexion.html', destination: '/exercise-and-your-complexion', permanent: true },
      { source: '/exercise-back-pain-away.html', destination: '/exercise-back-pain-away', permanent: true },
      { source: '/how-to-choose-an-exercise-bike.html', destination: '/how-to-choose-an-exercise-bike', permanent: true },
      { source: '/the-key-benefits-of-drinking-water-during-exercise.html', destination: '/the-key-benefits-of-drinking-water-during-exercise', permanent: true },
      { source: '/how-to-quit-smoking-with-exercise.html', destination: '/how-to-quit-smoking-with-exercise', permanent: true },
      { source: '/free-weights-vs-machines.html', destination: '/free-weights-vs-machines', permanent: true },
      { source: '/5-important-components-of-physical-fitness.html', destination: '/5-important-components-of-physical-fitness', permanent: true },
      { source: '/5-exercise-mistakes-and-misconceptions.html', destination: '/5-exercise-mistakes-and-misconceptions', permanent: true },
      { source: '/top-reasons-to-exercise-regularly.html', destination: '/top-reasons-to-exercise-regularly', permanent: true },
      { source: '/how-to-exercise-properly.html', destination: '/how-to-exercise-properly', permanent: true },
      { source: '/how-to-exercisise-properly.html', destination: '/how-to-exercise-properly', permanent: true }, // original had typo
      { source: '/bodybuilding-tips-for-men.html', destination: '/bodybuilding-tips-for-men', permanent: true },
      { source: '/top-bodybuilding-workout-tips.html', destination: '/top-bodybuilding-workout-tips', permanent: true },
      { source: '/the-best-bodybuilding-tips-for-female-bodybuilders.html', destination: '/the-best-bodybuilding-tips-for-female-bodybuilders', permanent: true },
      { source: '/best-abdominal-exercises-tips.html', destination: '/best-abdominal-exercises-tips', permanent: true },
      { source: '/is-bodybuilding-a-sport.html', destination: '/is-bodybuilding-a-sport', permanent: true },
      { source: '/cardio-exercise-tips.html', destination: '/cardio-exercise-tips', permanent: true },
      { source: '/the-importance-of-eating-and-exercise.html', destination: '/the-importance-of-eating-and-exercise', permanent: true },
      { source: '/exercise-videos.html', destination: '/exercise-videos', permanent: true },
    ];
  },
};

export default nextConfig;
