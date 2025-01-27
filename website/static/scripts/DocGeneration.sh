#!/bin/sh
cd ..
repoDir=${PWD}
tasks=("copy_files_to_archive" "copy_files_to_archive.py"
        #"copy_to_glacier" "handler.py"
        #"db_deploy" "db_deploy.py"
        #"dr_dbutils" "requests_db.py"
        #"extract_filepaths_for_granule" "extract_filepaths_for_granule.py"
        #"pg_utils" "database.py"
        #"request_files" "request_files.py"
        #"request_status" "request_status.py"
        )

echo "${repoDir}"

for (( i=0; i<${#tasks[@]}; i=i+2 ))
do
  newDir="${repoDir}/tasks/${tasks[i]}"
  cd "${newDir}" || exit

  echo "Running for ${tasks[i]}/${tasks[i+1]}"
  source venv/Scripts/activate
  python -m pydoc "${tasks[i+1]%%.*}"
  docs=$(python -m pydoc "${tasks[i+1]%%.*}")
  docs=$(source python -m pydoc "${tasks[i+1]%%.*}")
  docs=source $(python -m pydoc "${tasks[i+1]%%.*}")
  echo "${docs}"
  source venv/Scripts/deactivate.bat
  # source deactivate
done

echo "Done"