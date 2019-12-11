import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
// import DropzoneArea from "./Dropzone";
import { DropzoneArea } from "material-ui-dropzone";
import Input from "@material-ui/core/Input";

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
		overflow: "hidden"
	}
});

export default function Dropzone() {
	const [files, setFiles] = useState();

	const handleChange = files => {
		setFiles(files);
	};

	const classes = useStyles();
	return (
		<React.Fragment>
			{/* <Title>Upload a Photo</Title> */}
			{/* <Typography component="p" variant="h4">
        $3,024.00
      </Typography> */}
			{/* <DropzoneArea className={classes.depositContext} /> */}

			<DropzoneArea
				className={classes.depositContext}
				onChange={() => handleChange(files)}
				showPreviews={true}
				maxWidth={true}
				open={true}
				showPreviewsInDropzone={true}
			/>
			{/* <Input type={"file"} disableUnderline={true} autoFocus={true}></Input> */}
			{/* <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}
			{/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
		</React.Fragment>
	);
}
