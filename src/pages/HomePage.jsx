import TrendingList from 'components/TrendingList/TrendingList';
import React from 'react';
import { useTrendingList } from 'utils/hooks/useTrendingList';

export default function HomePage() {
  const { trendingMovies } = useTrendingList();
  return <TrendingList movies={trendingMovies} />;
}
