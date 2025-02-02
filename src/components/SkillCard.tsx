import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm border border-neutral-700"
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </motion.div>
  );
};

export { SkillCard };
