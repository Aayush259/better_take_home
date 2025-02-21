import ChangingThings from "@/components/about/ChangingThings";
import OurMission from "@/components/about/OurMission";
import Story from "@/components/about/Story";
import "@/styles/about.css";

export default function Page() {

    return (
        <main>
            <OurMission />
            <Story />
            <ChangingThings />
        </main>
    );
};
