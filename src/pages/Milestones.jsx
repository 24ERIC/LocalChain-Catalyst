import { Progress } from '@mantine/core';

const Milestones = () => {
  return (
    <>
      <h1>Project Milestones Archived</h1>
      <Progress
        radius="xl"
        size={30}
        sections={[
          { value: 25, color: 'b', label: 'Finish Suggestion', tooltip: 'Finish Suggestion - 10 Gb' },
          { value: 25, color: 'b', label: 'Plan Budgut', tooltip: 'Plan Budgut - 23 Gb' },
          { value: 25, color: 'b', label: 'Start Up', tooltip: 'Start Up - 23 Gb' },
          { value: 25, color: 'gray', label: 'End Finish', tooltip: 'End Finish - 0 Gb' },
        ]}
      />
      <p>Project Detail xxx</p>
      <p>Some Information xxxxx</p>
    </>
  );
};

export default Milestones;

