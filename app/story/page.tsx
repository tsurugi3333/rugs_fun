import Story from '../components/Story';

export default function StoryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Story fullPage={true} />
    </div>
  );
}