import { allProjects } from "@/.contentlayer/generated";
import FilterBadge from "./filter-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { countStrings } from "@/lib/utils";

const keyWordCount = countStrings(allProjects.flatMap((p) => p.keyWords!));

export default function FilterSelect({
  filter,
  setFilter,
}: {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Filter projects by key words</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-wrap gap-1">
            {Array.from(keyWordCount).map((entry) => (
              <FilterBadge
                key={entry[0]}
                keyWord={entry[0]}
                count={entry[1]}
                filter={filter}
                setFilter={setFilter}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
