import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY, GET_ALL_COUNTRIES, GET_ALL_CONTINENTS } from "../api/example";

type FormValues = {
    name: string;
    emoji: string;
    code: string;
    continent?: string;
};

const AddNewCountry = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY, {
        refetchQueries: [{ query: GET_ALL_COUNTRIES }],
        onCompleted: () => reset(),
    });

    const { data: continentsData, loading: loadingContinents } = useQuery(GET_ALL_CONTINENTS);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const formattedData = {
            ...data,
            continent: data.continent ? { id: parseInt(data.continent) } : null,
        };

        addCountry({ variables: { data: formattedData } });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-2 items-center mb-6"
        >
            <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
                {...register("emoji", { required: true })}
                placeholder="Emoji"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
                {...register("code", { required: true })}
                placeholder="Code"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <select
                {...register("continent")}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
                <option value="">Select a continent</option>
                {loadingContinents ? (
                    <option disabled>Loading...</option>
                ) : (
                    continentsData?.continents.map((c: { id: number; name: string }) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))
                )}
            </select>
            <button
                type="submit"
                disabled={loading}
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 disabled:opacity-50"
            >
                {loading ? "Adding..." : "Add"}
            </button>
            {error && <p className="text-red-500">{error.message}</p>}
        </form>
    );
};

export default AddNewCountry;
