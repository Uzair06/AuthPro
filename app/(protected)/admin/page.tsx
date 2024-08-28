
import { Card } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";

const AdminPage = () => {
    const role = useCurrentRole();
    return(
        <Card>
        Curernt role:{role}
        </Card>
        
    );
};

export default AdminPage;