import React from "react";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

const TRACKS = gql(`
  # Query goes here
  query GetTracks {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
