import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
    const { data: categories = [], isPending } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
        fetch('category.json')
        .then((res) =>
            res.json(),
          ),
    })
    return {categories, isPending};
};

export default useCategory;