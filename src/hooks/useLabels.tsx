import { useQuery } from '@tanstack/react-query';
import { gitubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await gitubApi.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  const labelQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
    // placeholderData:[],
    initialData: [
      {
        id: 725156255,
        node_id: 'MDU6TGFiZWw3MjUxNTYyNTU=',
        url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)',
        name: 'good first issue (taken)',
        color: 'b60205',
        default: false,
      },
      {
        id: 1155972012,
        node_id: 'MDU6TGFiZWwxMTU1OTcyMDEy',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler',
        name: 'Component: Scheduler',
        color: '9de8f9',
        default: false,
        description: '',
      },
    ],
  });

  return { labelQuery };
};
