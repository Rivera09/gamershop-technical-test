import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const getValueWithCorrectType = (paramValue: string | null) => {
  let tempValue: unknown;

  if (!paramValue) return;
  if (/^[0-9]+$/g.test(paramValue)) tempValue = +paramValue;
  else if (paramValue === "false") tempValue = false;
  else if (paramValue === "true") tempValue = true;
  else if (paramValue.includes(",")) {
    const arrayValue: unknown[] = [];

    for (const item of paramValue.split(",")) {
      const itemValue = getValueWithCorrectType(item);

      arrayValue.push(itemValue);
    }

    tempValue = arrayValue;
  } else tempValue = paramValue;

  return tempValue;
};

export const useUrlState = <T extends Record<string, unknown>>(
  initialState: T,
  paramsToSearch?: string[]
): [T, (v: T | ((prev?: T) => T)) => void] => {
  const searchParams = useSearchParams();
  const emptyParamsObj = useParams();
  const router = useRouter();
  const paramValuesChecked = useRef(false);
  const pathName = usePathname();
  const [state, setState] = useState(initialState);

  const setUrlState = useCallback(
    (changeValue: T | ((prev?: T) => T)) => {
      const params = new URLSearchParams(searchParams.toString());
      const newValue =
        typeof changeValue === "object" ? changeValue : changeValue(state);

      for (const key of Object.keys(newValue)) {
        const value = newValue[key];

        if (!value || (Array.isArray(value) && !value.length))
          params.delete(key);
        else if (Array.isArray(value)) params.set(key, value.join(","));
        else params.set(key, `${value}`);

        const newParams = params.toString();

        if (newParams.length) router.replace(`${pathName}?${newParams}`);
        else router.replace(pathName);
      }

      setState(newValue);
    },
    [searchParams, router, pathName, state, setState]
  );

  useEffect(() => {
    if (
      !emptyParamsObj ||
      paramValuesChecked.current ||
      !paramsToSearch?.length
    )
      return;
    paramValuesChecked.current = true;

    const obj: Record<string, unknown> = {};

    for (const paramToSearch of paramsToSearch) {
      if (searchParams.has(paramToSearch)) {
        const paramValue = searchParams.get(paramToSearch);

        obj[paramToSearch] = getValueWithCorrectType(paramValue);
      }
    }

    if (Object.keys(obj).length) setState(obj as T);
  }, [initialState, searchParams, emptyParamsObj, pathName, paramsToSearch]);

  return [state, setUrlState];
};
