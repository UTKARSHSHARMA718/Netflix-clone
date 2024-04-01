import AppContent from "@/app/(protected)/profiles/_content/Content";
import { getCurrentUser } from "@/actions/getCurrentUser";

const App = async () => {
    const currentUser = await getCurrentUser();

    return (
        <AppContent {...{ currentUser }} />
    );
}

export default App;